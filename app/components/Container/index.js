import React, { Children } from 'react';
import PropTypes from 'prop-types';

function Container(props) {
  return <div className="container">{Children.toArray(props.children)}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
