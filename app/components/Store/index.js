import React from 'react';
import PropTypes from 'prop-types';

function Store(props) {
  const { store } = props;

  return (
    <div>
      <h3>{store.name}</h3>
    </div>
  );
}

Store.propTypes = {
  store: PropTypes.object,
};

export default Store;
