import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import Cross from 'images/cross.svg';

import 'styles.scss';

function Modal(props) {
  return (
    <div className="modal__overlay">
      <div className="modal__aligner">
        <div className="modal__card">
          <div className="modal__header">
            <h1 className="modal__title">Adicione um novo local</h1>

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

          <div className="modal__body">
            <div>
              <input
                name="name"
                className="modal__input"
                type="text"
                placeholder="Nome do local"
              />
            </div>

            <div>
              <input
                name="city"
                className="modal__input"
                type="text"
                placeholder="Cidade"
              />
            </div>

            <div>
              <input
                name="link"
                className="modal__input"
                type="text"
                placeholder="Link para doação"
              />
            </div>

            <div>
              <input
                name="link"
                className="modal__input modal__input--pointer"
                type="file"
                placeholder="Foto da faixada"
              />
            </div>
          </div>

          <div className="modal__footer">
            <Button onClick={props.handleClick}>Adicionar Local</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  handleClick: PropTypes.func,
  handleClose: PropTypes.func,
};

export default Modal;
