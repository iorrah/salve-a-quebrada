import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import Cross from 'images/cross.svg';

import 'styles.scss';

function Modal(props) {
  const inputName = useRef(null);
  const inputAddress = useRef(null);

  useEffect(() => {
    inputName.current.focus();
  });

  const getIsNameValid = () => {
    if (props.name === '') {
      inputName.current.focus();
      return false;
    }

    return true;
  };

  const getIsAddressValid = () => {
    if (props.address === '') {
      inputAddress.current.focus();
      return false;
    }

    return true;
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (!getIsNameValid()) {
      return false;
    }

    if (!getIsAddressValid()) {
      return false;
    }

    props.handleSubmit();
    return true;
  };

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

          <form onSubmit={handleFormSubmit}>
            <div className="modal__body">
              <div>
                <input
                  ref={inputName}
                  name="name"
                  className="modal__input"
                  type="text"
                  placeholder="Nome do local *"
                  value={props.name}
                  onChange={props.handleChange}
                />
              </div>

              <div>
                <input
                  ref={inputAddress}
                  name="address"
                  className="modal__input"
                  type="text"
                  placeholder="Endereço completo *"
                  value={props.address}
                  onChange={props.handleChange}
                />
              </div>

              <div>
                <input
                  name="link"
                  className="modal__input"
                  type="text"
                  placeholder="Link para doação"
                  value={props.link}
                  onChange={props.handleChange}
                />
              </div>

              <div className="modal_input-container">
                <input
                  name="image-text"
                  className="modal__input modal__input--file"
                  type="text"
                  placeholder="Foto da faixada"
                  value={props.imageText}
                  onChange={props.handleChange}
                />

                {/* <input
                  name="image-file"
                  id="image-file"
                  className="modal__input-file"
                  type="file"
                /> */}

                {/* <label
                  htmlFor="image-file"
                  className="modal__input-file-trigger"
                  title="Adicionar imagem"
                >
                  Upload
                </label> */}
              </div>
            </div>

            <div className="modal__footer">
              <Button type="submit">Adicionar Local</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  handleSubmit: PropTypes.func,
  handleClose: PropTypes.func,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  address: PropTypes.string,
  link: PropTypes.string,
  imageText: PropTypes.string,
};

export default Modal;
