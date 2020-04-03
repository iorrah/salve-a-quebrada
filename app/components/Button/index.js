import React, { Children } from 'react';
import PropTypes from 'prop-types';

import HollowAnchor from './HollowAnchor';
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
    button = (
      <HollowAnchor href={props.href} target={props.target}>
        {children}
      </HollowAnchor>
    );
  }

  return button;
}

Button.defaultProps = {
  target: '_self',
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
