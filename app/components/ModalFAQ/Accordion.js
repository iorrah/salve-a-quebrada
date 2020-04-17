import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Collapsable from './Collapsable';
import Answer from './Answer';
import Question from './Question';

function Accordion(props) {
  const [answerOpened, setAnswer] = useState(false);
  const handleClick = () => setAnswer(!answerOpened);

  return (
    <Collapsable onClick={handleClick}>
      <Question>{props.question}</Question>

      {answerOpened && <Answer>{props.answer}</Answer>}
    </Collapsable>
  );
}

Accordion.propTypes = {
  question: PropTypes.object,
  answer: PropTypes.object,
};

export default Accordion;
