import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { toast } from 'react-toastify';

import 'static/bootstrap-grid.css';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import PageHeader from 'components/Header';
import H2 from 'components/H2';
import Container from 'components/Container';
import Store from 'components/Store';
import Modal from 'components/Modal';
import ModalFAQ from 'components/ModalFAQ';
import ModalStore from 'components/Modal/ModalStore';
import Button from 'components/Button';
import LoadingIndicator from 'components/LoadingIndicator';

import Main from './Main';
import Header from './Header';
import Stores from './Stores';
import Small from './Small';
import ErrorBox from './ErrorBox';

import { loadStores, addStore } from './actions';
import {
  makeSelectStores,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
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
  const [modalFAQOpen, setModalFAQOpen] = useState(false);
  const [modalStoreOpen, setModalStoreOpen] = useState(false);
  const [modalSelectedStore, setModalSelectedStore] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [link, setLink] = useState('');
  const [imageText, setImageText] = useState('');
  const [showAllStores, setShowAllStores] = useState(false);

  const cleanDraftStore = () => {
    setName('');
    setAddress('');
    setLink('');
    setImageText('');
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleOpenModalFAQ = () => {
    setModalFAQOpen(true);
  };

  const handleOpenModalStore = store => {
    setModalSelectedStore(store);
    setModalStoreOpen(true);
  };

  const handleOpenModalAddStore = () => {
    handleCloseModalFAQ();
    handleOpenModal();
  };

  const handleModalSubmit = () => {
    const newStore = {
      name,
      address,
      image: imageText,
      donation: link,
      status: 0,
    };

    dispatchAddStore(newStore);
    setModalOpen(false);
    cleanDraftStore();

    toast.success('Adicionado com sucesso!', {
      position: 'bottom-center',
      autoClose: 3000,
    });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCloseModalStore = () => {
    setModalStoreOpen(false);
  };

  const handleCloseModalFAQ = () => {
    setModalFAQOpen(false);
  };

  const handleModalChange = event => {
    const { target } = event;

    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'address':
        setAddress(target.value);
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

  const handleClickShowAllStores = () => {
    setShowAllStores(true);
  };

  const getFilteredStores = allStores => {
    if (showAllStores === true) {
      return allStores;
    }

    return allStores.slice(0, 18);
  };

  const filteredStores = getFilteredStores(stores);

  return (
    <React.Fragment>
      <PageHeader
        handleClick={handleOpenModal}
        handleClickFAQ={handleOpenModalFAQ}
        handleSelectStore={handleOpenModalStore}
        stores={stores}
      />

      <Main>
        <Helmet>
          <title>Página Inicial</title>
          <meta name="description" content="" />
        </Helmet>

        <Container>
          {error ? (
            <ErrorBox>
              <b>Opaaa...</b> alguma coisa deu muito errado mas tá tudo bem, a
              culpa não é sua. Já tem alguém resolvendo essa treta. Volta daqui
              a pouco :D
            </ErrorBox>
          ) : (
            <React.Fragment>
              {loading ? (
                <LoadingIndicator />
              ) : (
                <React.Fragment>
                  <Header>
                    <H2>
                      Locais disponíveis: <Small>{stores.length}</Small>
                    </H2>

                    <Button onClick={handleOpenModal}>Adicionar Local</Button>
                  </Header>

                  <Stores className="row">
                    {filteredStores.map(store => (
                      <Store store={store} key={store.id} />
                    ))}
                  </Stores>

                  {!showAllStores && (
                    <Button size="large" onClick={handleClickShowAllStores}>
                      Carregar tudo ({stores.length} itens)
                    </Button>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </Container>

        {modalOpen === true && (
          <Modal
            handleSubmit={handleModalSubmit}
            handleClose={handleCloseModal}
            handleChange={handleModalChange}
            name={name}
            address={address}
            link={link}
            imageText={imageText}
          />
        )}

        {modalFAQOpen === true && (
          <ModalFAQ
            handleClose={handleCloseModalFAQ}
            handleOpenModalAddStore={handleOpenModalAddStore}
          />
        )}

        {modalStoreOpen === true && (
          <ModalStore
            handleClose={handleCloseModalStore}
            store={modalSelectedStore}
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
