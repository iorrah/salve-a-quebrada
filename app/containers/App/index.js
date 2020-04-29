/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Route, withRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from 'containers/HomePage/Loadable';
import Terms from 'containers/Terms/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Footer from 'components/Footer';
import CloseToaster from 'components/CloseToaster';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
`;

function App({ existingHistory }) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Salve a Quebrada"
        defaultTitle="Salve a Quebrada"
      >
        <meta name="description" content="" />
      </Helmet>

      <ToastContainer hideProgressBar closeButton={<CloseToaster />} />

      <Switch basename="/" history={existingHistory}>
        <Route exact path="/" component={withRouter(HomePage)} />
        <Route exact path="/terms" component={withRouter(Terms)} />
        <Route path="" component={withRouter(NotFoundPage)} />
      </Switch>

      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

App.propTypes = {
  existingHistory: PropTypes.object,
};

export default App;
