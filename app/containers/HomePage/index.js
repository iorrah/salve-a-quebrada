import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import 'static/bootstrap-grid.css';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';

import H2 from 'components/H2';
import Container from 'components/Container';
import Store from 'components/Store';
import Modal from 'components/Modal';
import Button from 'components/Button';

import Main from './Main';
import Header from './Header';
import Stores from './Stores';
import Small from './Small';

import { loadStores } from './actions';
import { makeSelectStores } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({ loading, error, dispatchLoadStores, stores }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    dispatchLoadStores();
  }, []);

  return (
    <Main>
      <Helmet>
        <title>Página Inicial</title>
        <meta name="description" content="" />
      </Helmet>

      <Container>
        <Header>
          {error && <p>{error}</p>}
          {loading && <p>Loading...</p>}

          <H2>
            Directory <Small>({stores.length} locals)</Small>
          </H2>

          <Button onClick={() => {}}>Adicionar Local</Button>
        </Header>

        <Stores className="row">
          {stores.map(store => (
            <Store store={store} key={store.id} />
          ))}
        </Stores>

        {/* <Button size="large" onClick={() => {}}>
          Carregar mais
        </Button> */}
      </Container>

      <Modal />
    </Main>
  );
}

HomePage.propTypes = {
  stores: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  dispatchLoadStores: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  stores: makeSelectStores(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatchLoadStores: () => dispatch(loadStores()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
