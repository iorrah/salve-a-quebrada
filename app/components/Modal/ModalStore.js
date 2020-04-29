import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import Cross from 'images/cross.svg';
import placeholder from 'images/placeholder.jpg';

import 'styles.scss';

import Details from './Details';
import ImgWrapper from './ImgWrapper';
import Img from './Img';
import H3 from './H3';
import P from './P';

function ModalStore(props) {
  const { store } = props;
  let href = placeholder;

  if (store.image !== '' && store.image !== undefined) {
    href = store.image;
  }

  return (
    <div className="modal__overlay">
      <div className="modal__aligner">
        <div className="modal__card">
          <div className="modal__header modal__header--clean">
            <button
              onClick={props.handleClose}
              type="button"
              className="modal__close-button"
            >
              <img
                src={Cross}
                className="modal__close-image"
                alt="Fechar"
                title="Fechar"
              />
            </button>
          </div>

          <div className="modal__body modal__body--full">
            <ImgWrapper>
              <Img src={href} alt="Foto do Restaurante" />
            </ImgWrapper>

            <Details>
              <H3>{store.name}</H3>
              <P>{store.address}</P>
            </Details>
          </div>

          <div className="modal__footer">
            <Button type="hollow" target="_blank" href={store.donation}>
              Abrir Doações
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalStore.propTypes = {
  handleClose: PropTypes.func,
  store: PropTypes.object,
};

export default ModalStore;
