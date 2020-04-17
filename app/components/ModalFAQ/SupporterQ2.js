import React from 'react';
import PropTypes from 'prop-types';
import Accordion from './Accordion';
import Button from './Button';

function SupporterQ2(props) {
  const answer = (
    <span>
      Para adicionar seus locais favoritos no site,{' '}
      <Button onClick={props.handleOpenModalAddStore}>clique aqui</Button>.
    </span>
  );

  return (
    <Accordion
      question="Por que o meu lugar favorito não está nesse site?"
      answer={answer}
    />
  );
}

SupporterQ2.propTypes = {
  handleOpenModalAddStore: PropTypes.func,
};

export default SupporterQ2;
