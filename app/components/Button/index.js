import React, { Children } from 'react';
import PropTypes from 'prop-types';

import A from './A';
import PrimaryButton from './PrimaryButton';
import PrimaryButtonLarge from './PrimaryButtonLarge';
import HollowButton from './HollowButton';

function Button(props) {
  const children = Children.toArray(props.children);
  let StyledButton = null;

  switch (props.type) {
    case 'hollow':
      StyledButton = HollowButton;
      break;
    default:
      StyledButton = PrimaryButton;

      if (props.size && props.size === 'large') {
        StyledButton = PrimaryButtonLarge;
      }

      break;
  }

  let button = <StyledButton onClick={props.onClick}>{children}</StyledButton>;

  if (props.href) {
    button = <A href={props.href}>{children}</A>;
  }

  return button;
}

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
