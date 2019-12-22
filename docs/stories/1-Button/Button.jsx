import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

/** Button component description */
const ButtonPage = ({disabled, label, style, onClick}) => (
  <button disabled={disabled} style={style} onClick={onClick}>
    {label}
  </button>
);

ButtonPage.defaultProps = {
  disabled: false,
  onClick: () => {},
  style: {},
};

ButtonPage.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.shape,
};
export default ButtonPage;
