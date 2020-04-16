import React from 'react';
import PropTypes from 'prop-types';
import Cross from 'images/cross.svg';
import questions from './questions';

import Overlay from './Overlay';
import Aligner from './Aligner';
import Card from './Card';
import Header from './Header';
import H3 from './H3';
import Close from './Close';
import CloseImage from './CloseImage';
import Body from './Body';
import H4 from './H4';
import Collapsable from './Collapsable';
import Question from './Question';
import Answer from './Answer';
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

            {questions.supporters.map(item => (
              <Collapsable key={item.id}>
                <Question>{item.question}</Question>
                <Answer>{item.answer}</Answer>
              </Collapsable>
            ))}

            <H4>Para locais</H4>

            {questions.locals.map(item => (
              <Collapsable key={item.id}>
                <Question>{item.question}</Question>
                <Answer>{item.answer}</Answer>
              </Collapsable>
            ))}
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
