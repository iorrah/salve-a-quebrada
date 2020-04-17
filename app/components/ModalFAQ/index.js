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
import Accordion from './Accordion';
import Footer from './Footer';

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

            <Accordion
              question="O que é Salve a Quebrada?"
              answer="O que é Salve a Quebrada?"
            />

            <Accordion
              question="O que é Salve a Quebrada?"
              answer="O que é Salve a Quebrada?"
            />

            <Accordion
              question="O que é Salve a Quebrada?"
              answer="O que é Salve a Quebrada?"
            />

            <H4>Para locais</H4>

            <Accordion
              question="O que é Salve a Quebrada?"
              answer="O que é Salve a Quebrada?"
            />

            <Accordion
              question="O que é Salve a Quebrada?"
              answer="O que é Salve a Quebrada?"
            />

            <Accordion
              question="O que é Salve a Quebrada?"
              answer="O que é Salve a Quebrada?"
            />
          </Body>

          <Footer />
        </Card>
      </Aligner>
    </Overlay>
  );
}

ModalFAQ.propTypes = {
  handleClose: PropTypes.func,
};

export default ModalFAQ;
