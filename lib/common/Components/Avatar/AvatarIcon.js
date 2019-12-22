import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Animated } from 'react-native';
import Icon from '../Core/Icon';
import { elevationShadowStyle } from '../../Helpers/styleGenerator';
import Color from 'color';
import { useTheme } from '../../Theming';

const AvatarIcon = ({
  icon,
  size = 32,
  padding,
  color,
  iconFontFamily = 'materialCommunity',
  backgroundColor,
  style,
  containerStyle,
  elevation,
  theme,
  ...props
}) => {
  theme = useTheme(theme);
  backgroundColor = backgroundColor || theme.color.primary;
  return React.createElement(Animated.View, _extends({}, props, {
    style: [{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor,
      padding,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center'
    }, elevationShadowStyle(elevation || 1), containerStyle]
  }), React.createElement(Icon, {
    name: icon,
    size: size * 2 / 3,
    color: Color(backgroundColor).isDark() && typeof color !== 'string' ? 'white' : color !== 'string' ? 'black' : color,
    family: iconFontFamily
  }));
};

AvatarIcon.propTypes = {
  elevation: _pt.number,
  size: _pt.number,
  style: _pt.any,
  containerStyle: _pt.any,
  padding: _pt.number,
  color: _pt.string,
  icon: _pt.string,
  backgroundColor: _pt.string,
  theme: _pt.any,
  iconFontFamily: _pt.oneOf(['materialCommunity', 'material', 'simpleLine', 'fa', 'fa5', 'fa5pro', 'foundation', 'evil', 'octicons', 'ionic', 'feather', 'entypo', 'zocial'])
};
AvatarIcon.displayName = 'Avatar.Icon';
export default AvatarIcon;