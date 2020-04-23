import React from 'react';
import PropTypes from 'prop-types';
import Accordion from './Accordion';
import Button from './Button';

function LocalQ1(props) {
  const answer = (
    <span>
      Para adicionar seus locais favoritos no site,{' '}
      <Button onClick={props.handleOpenModalAddStore}>clique aqui</Button> e
      aguarde a aprovação do novo local.
    </span>
  );

  return (
    <Accordion
      question="Por que minha empresa não aparece nos seus resultados de pesquisa?"
      answer={answer}
    />
  );
}

LocalQ1.propTypes = {
  handleOpenModalAddStore: PropTypes.func,
};

export default LocalQ1;
