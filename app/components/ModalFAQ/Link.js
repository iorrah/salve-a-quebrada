import React from 'react';
import PropTypes from 'prop-types';

function Link(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      title="Abrir link em uma nova aba"
      className="modal-faq__link"
    >
      {props.label}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
};

export default Link;
