import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ChevronBottom from 'images/chevron-bottom.svg';
import ChevronTop from 'images/chevron-top.svg';

import Collapsable from './Collapsable';
import Answer from './Answer';
import Question from './Question';
import Chevron from './Chevron';

function Accordion(props) {
  const [answerOpened, setAnswer] = useState(false);
  const handleClick = () => setAnswer(!answerOpened);

  return (
    <Collapsable onClick={handleClick}>
      {answerOpened ? (
        <Chevron src={ChevronTop} alt="Fechar" title="Fechar" />
      ) : (
        <Chevron src={ChevronBottom} alt="Abrir" title="Abrir" />
      )}

      <Question>{props.question}</Question>
      {answerOpened && <Answer>{props.answer}</Answer>}
    </Collapsable>
  );
}

Accordion.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Accordion;
