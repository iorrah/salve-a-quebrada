import React from 'react';
import PropTypes from 'prop-types';
import A from './A';

function Link(props) {
  return (
    <A
      href={props.href}
      target="_blank"
      title="Abrir link em uma nova aba"
      className="modal-faq__link"
    >
      {props.label}
    </A>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
};

export default Link;
