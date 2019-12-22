function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import IconButton from '../Buttons/IconButton';
/**
 *
 * @param example codes
 * <AppBar.Action icon="menu"/>
 * <AppBar.Action icon="menu" size={24} color="black" containerStyle={{}} />
 */

const Action = ({
  containerStyle,
  ...buttonProps
}) => {
  return React.createElement(IconButton, _extends({}, buttonProps, {
    containerStyle: [{
      margin: 8
    }, containerStyle]
  }));
};

Action.displayName = 'Action';
export default Action;