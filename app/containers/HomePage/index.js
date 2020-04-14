import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import 'static/bootstrap-grid.css';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';

import PageHeader from 'components/Header';
import H2 from 'components/H2';
import Container from 'components/Container';
import Store from 'components/Store';
import Modal from 'components/Modal';
import Button from 'components/Button';

import Main from './Main';
import Header from './Header';
import Stores from './Stores';
import Small from './Small';

import { loadStores, addStore } from './actions';
import { makeSelectStores } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  loading,
  error,
  stores,
  dispatchLoadStores,
  dispatchAddStore,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    dispatchLoadStores();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [link, setLink] = useState('');
  const [imageText, setImageText] = useState('');

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleModalSubmit = () => {
    const newStore = {
      name,
      city,
      image: imageText,
      donation: link,
      status: 0,
    };

    dispatchAddStore(newStore);
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleModalChange = event => {
    const { target } = event;

    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'city':
        setCity(target.value);
        break;
      case 'link':
        setLink(target.value);
        break;
      case 'image-text':
        setImageText(target.value);
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <PageHeader handleClick={handleOpenModal} />

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
              Locais disponíveis: <Small>{stores.length}</Small>
            </H2>

            <Button onClick={handleOpenModal}>Adicionar Local</Button>
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

        {modalOpen === true && (
          <Modal
            handleSubmit={handleModalSubmit}
            handleClose={handleCloseModal}
            handleChange={handleModalChange}
            name={name}
            city={city}
            link={link}
            imageText={imageText}
          />
        )}
      </Main>
    </React.Fragment>
  );
}

HomePage.propTypes = {
  stores: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  dispatchLoadStores: PropTypes.func,
  dispatchAddStore: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  stores: makeSelectStores(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatchLoadStores: () => dispatch(loadStores()),
    dispatchAddStore: store => dispatch(addStore(store)),
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
