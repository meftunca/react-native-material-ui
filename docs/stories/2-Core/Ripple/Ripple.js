import React from 'react';
import PropTypes from 'prop-types';

export const Ripple = () => <></>;

Ripple.defaultProps = {
  disabled: false,
  rippleContainerBorderRadius: 5,
  delayPressIn: 150,
  delayPressOut: 150,
  delayLongPress: 360,
  rippleColor: 'rgb(0, 0, 0)',
  rippleOpacity: 0.4,
  rippleDuration: 350,
  rippleSize: 0,
  rippleCentered: false,
  rippleSequential: false,
  rippleFades: true,
};
Ripple.propTypes = {
  disabled: PropTypes.bool,
  style: PropTypes.any,
  rippleColor: PropTypes.string,
  rippleOpacity: PropTypes.number,
  rippleDuration: PropTypes.number,
  rippleSize: PropTypes.number,
  delayPressIn: PropTypes.number,
  delayPressOut: PropTypes.number,
  delayLongPress: PropTypes.number,
  rippleContainerBorderRadius: PropTypes.number,
  rippleCentered: PropTypes.bool,
  rippleSequential: PropTypes.bool,
  rippleFades: PropTypes.bool,
  nativeID: PropTypes.any,
  buttonRef: PropTypes.any,
  onRippleAnimation: PropTypes.func,
};
export default Ripple;
