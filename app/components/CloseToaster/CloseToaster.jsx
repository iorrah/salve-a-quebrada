import React from 'react';
import PropTypes from 'prop-types';

const CloseToaster = ({ closeToast }) => (
  <i
    className="Toastify__toast-close-icon"
    onClick={closeToast}
    role="button"
  >
    Fechar
  </i>
);

CloseToaster.propTypes = {
  closeToast: PropTypes.func,
};

export default CloseToaster;
