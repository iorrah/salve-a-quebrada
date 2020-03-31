/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import * as firebase from 'firebase/app';
import '@firebase/firestore';

import 'static/bootstrap-grid.css';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import Container from 'components/Container';
import Store from 'components/Store';
import Button from 'components/Button';

import Main from './Main';
import Header from './Header';
import Stores from './Stores';
import AtPrefix from './AtPrefix';
import Form from './Form';
import Input from './Input';
import Small from './Small';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

const firebaseConfig = {
  apiKey: 'xxxxxxxxx',
  authDomain: 'xxxxxxxxx',
  databaseURL: 'xxxxxxxxx',
  projectId: 'xxxxxxxxx',
  storageBucket: 'xxxxxxxxx',
  messagingSenderId: 'xxxxxxxxx',
  appId: 'xxxxxxxxx',
  measurementId: 'xxxxxxxxx',
};

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [stores, setStores] = useState([]);

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore();

    db.collection('stores')
      .get()
      .then(querySnapshot => {
        const rawStores = [];

        querySnapshot.forEach(doc => {
          rawStores.push({ ...doc.data(), id: doc.id });
        });

        setStores(rawStores);
      });
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <Main>
      <Helmet>
        <title>Página Inicial</title>
        <meta name="description" content="" />
      </Helmet>

      <Container>
        <Header>
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

        <Button size="large" onClick={() => {}}>
          Carregar mais
        </Button>

        <Section>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="username">
              <FormattedMessage {...messages.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </AtPrefix>
              <Input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </label>
          </Form>
          <ReposList {...reposListProps} />
        </Section>
      </Container>
    </Main>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
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
