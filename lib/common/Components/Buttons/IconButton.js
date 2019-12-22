import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Ripple from './../Core/Ripple';
import { View } from 'react-native';
import Icon from '../Core/Icon';
import { useTheme } from '../../Theming';

const IconButton = ({
  children,
  color = 'text',
  role = 'button',
  style,
  size = 24,
  iconFontFamily,
  backgroundColor,
  rippleStyle,
  theme,
  containerStyle,
  icon,
  ...props
}) => {
  const themeControl = useTheme(theme);
  const textColor = color && color in themeControl.color ? themeControl.color[color] : color ? color : themeControl.color.primary;
  return React.createElement(View, {
    pointerEvents: "auto",
    style: [{
      borderRadius: size * 2,
      minHeight: size + (role === 'chip' ? 4 : 8),
      minWidth: size + (role === 'chip' ? 4 : 8)
    }, containerStyle]
  }, React.createElement(Ripple, _extends({}, props, {
    rippleContainerBorderRadius: size,
    style: [rippleStyle, {
      backgroundColor,
      borderRadius: size * 2
    }],
    rippleColor: textColor
  }), icon !== undefined && React.createElement(Icon, {
    name: icon,
    color: textColor,
    family: iconFontFamily,
    size: size,
    style: {
      margin: role === 'chip' ? 2 : 8,
      width: size,
      height: size
    }
  })));
};

IconButton.propTypes = {
  iconFontFamily: _pt.any,
  role: _pt.oneOf(['icon', 'chip']),
  paperProps: _pt.any,
  color: _pt.oneOfType([_pt.string, _pt.oneOf(['primary', 'secondary', 'accent', 'error', 'warning', 'text'])]),
  backgroundColor: _pt.string,
  size: _pt.number,
  icon: _pt.string,
  theme: _pt.object,
  containerStyle: _pt.any,
  style: _pt.any,
  rippleStyle: _pt.any
};
export default IconButton;