import React from 'react';
import PropTypes from 'prop-types';
import Cross from 'images/cross.svg';

import Overlay from './Overlay';
import Aligner from './Aligner';
import Card from './Card';
import Header from './Header';
import H3 from './H3';
import Close from './Close';
import CloseImage from './CloseImage';
import Body from './Body';
import H4 from './H4';
import Footer from './Footer';

import SupporterQ1 from './SupporterQ1';
import SupporterQ2 from './SupporterQ2';
import SupporterQ3 from './SupporterQ3';
import SupporterQ4 from './SupporterQ4';

import LocalQ1 from './LocalQ1';
import LocalQ2 from './LocalQ2';
import LocalQ3 from './LocalQ3';

function ModalFAQ(props) {
  return (
    <Overlay>
      <Aligner>
        <Card>
          <Header>
            <H3>Perguntas frequentes</H3>

            <Close
              onClick={props.handleClose}
              type="button"
              className="modal__close-button"
            >
              <CloseImage src={Cross} alt="Fechar" title="Fechar" />
            </Close>
          </Header>

          <Body>
            <H4>Para apoiadores</H4>

            <SupporterQ1 />

            <SupporterQ2
              handleOpenModalAddStore={props.handleOpenModalAddStore}
            />

            <SupporterQ3 />
            <SupporterQ4 />

            <H4>Para locais</H4>

            <LocalQ1 handleOpenModalAddStore={props.handleOpenModalAddStore} />
            <LocalQ2 />
            <LocalQ3 />
          </Body>

          <Footer />
        </Card>
      </Aligner>
    </Overlay>
  );
}

ModalFAQ.propTypes = {
  handleClose: PropTypes.func,
  handleOpenModalAddStore: PropTypes.func,
};

export default ModalFAQ;
