/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import A from './A';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

function Button(props) {
  const children = Children.toArray(props.children);
  let button = <StyledButton onClick={props.onClick}>{children}</StyledButton>;

  if (props.href) {
    button = <A href={props.href}>{children}</A>;
  }

  return <Wrapper>{button}</Wrapper>;
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
