import React from 'react';
import propTypes from 'prop-types';

export const FormControlProps = () => <div>deneme</div>;

FormControlProps.defaultProps = {
  size: 16,
  disabled: false,
  type: 'checkbox',
  color: 'blue',
};
FormControlProps.propTypes = {
  size: propTypes.number,
  disabled: propTypes.bool,
  color: propTypes.string,
  type: propTypes.oneOf(['radio', 'checkbox']),
};
