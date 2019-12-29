import React from 'react';
import propTypes from 'prop-types';

export const FormFieldProps = () => <div>deneme</div>;

FormFieldProps.defaultProps = {};
FormFieldProps.propTypes = {
  defaultValue: propTypes.string,
  value: propTypes.string,
  label: propTypes.string,
  error: propTypes.bool,
  success: propTypes.bool,
  warning: propTypes.bool,
  count: propTypes.bool,
  multiLine: propTypes.bool,
  Left: propTypes.func,
  Right: propTypes.func,
  disabled: propTypes.bool,
  ripple: propTypes.bool,
  numberOfLines: propTypes.number,
  helperText: propTypes.string,
  bottomWrapperStyle: propTypes.object,
  clearButtonMode: propTypes.oneOfType([
    propTypes.oneOf(['never']),
    propTypes.oneOf(['while-editing']),
    propTypes.oneOf(['unless-editing']),
    propTypes.oneOf(['always']),
  ]),
  placeholder: propTypes.string,
  min: propTypes.number,
  max: propTypes.number,
  onChange: propTypes.func,
};
