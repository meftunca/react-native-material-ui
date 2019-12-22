import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Animated } from 'react-native';
import Ripple from './../Core/Ripple';
import Text from './../Core/Typography';
import Surface from './../Core/Surface';
import Icon from '../Core/Icon';
import Color from 'color';
import { useTheme } from '../../Theming';
import { elevationShadowStyle } from '../../Helpers/styleGenerator';

const Button = ({
  variant = 'text',
  children,
  cornerRadius = 4,
  elevation = 2,
  paperProps = {
    padding: [0, 8],
    margin: 2
  },
  color,
  role = 'button',
  style,
  size = 20,
  type = 'button',
  dense = false,
  fullWidth = false,
  iconFontFamily,
  rippleStyle,
  onLayout,
  buttonRef,
  theme,
  containerStyle,
  icon,
  textProps,
  transform = 'capitalize',
  ...props
}) => {
  const themeControl = useTheme(theme);
  const isDefaultButton = role === 'button';
  let textColor = color && color in themeControl.color ? themeControl.color[color] : color ? color : themeControl.color.primary;
  textColor = !color && role === 'button' ? themeControl.color.primary : role !== 'button' ? themeControl.color.primary : Color(color).isDark() ? variant === 'contained' ? 'white' : color : color;
  return React.createElement(Ripple, _extends({
    rippleOpacity: Color(textColor).isDark() ? 0.4 : undefined,
    style: [rippleStyle, {
      margin: 4,
      borderRadius: cornerRadius,
      overflow: 'hidden'
    }, buttonStyleGenerator(isDefaultButton ? variant : role === 'fab' ? 'contained' : 'text', textColor, type), variant === 'contained' && elevationShadowStyle(elevation)],
    rippleDuration: 300,
    rippleColor: Color(textColor).isDark() ? Color(textColor).whiten(0.4).darken(0.7).rgb().toString() : Color(textColor).darken(0.2).toString()
  }, props), React.createElement(Animated.View, {
    ref: buttonRef,
    onLayout: onLayout,
    style: [{
      borderRadius: !isDefaultButton ? dense ? size - 4 : size + 4 : cornerRadius,
      overflow: 'hidden'
    }, containerStyle, !isDefaultButton && fullWidth === false ? {
      alignSelf: 'flex-start'
    } : {}]
  }, React.createElement(Surface, _extends({}, paperProps, {
    direction: "row",
    justify: type === 'drawer' ? 'flex-start' : 'center',
    alignItems: "center",
    alignContent: "center",
    margin: [0, 8],
    padding: 0,
    style: [style, {
      backgroundColor: 'transparent',
      borderRadius: cornerRadius,
      minHeight: 36 // minWidth: 64,

    }]
  }), icon !== undefined && React.createElement(Icon, {
    name: icon,
    color: type === 'button' && variant === 'contained' ? Color(textColor).isDark() ? 'white' : textColor : textColor,
    family: iconFontFamily,
    size: size - (dense ? 4 : 0),
    style: {
      marginLeft: 8
    }
  }), role === 'button' && React.createElement(React.Fragment, null, typeof children === 'string' ? React.createElement(Text, _extends({
    dense: dense,
    style: {
      textTransform: transform,
      textAlign: 'center',
      marginHorizontal: 8
    },
    weight: "500",
    variant: "button"
  }, textProps, {
    contrast: 1,
    color: type === 'button' && variant === 'contained' ? Color(textColor).isDark() ? 'white' : textColor : textColor
  }), children) : children))));
};

Button.propTypes = {
  iconFontFamily: _pt.any,
  variant: _pt.oneOf(['text', 'outlined', 'contained']),
  type: _pt.oneOf(['button', 'drawer', 'dialog']),
  role: _pt.oneOf(['fab', 'icon', 'button']),
  paperProps: _pt.any,
  color: _pt.oneOfType([_pt.string, _pt.oneOf(['primary']), _pt.oneOf(['secondary'])]),
  cornerRadius: _pt.number,
  elevation: _pt.number,
  size: _pt.number,
  dense: _pt.bool,
  fullWidth: _pt.bool,
  onLayout: _pt.any,
  textProps: _pt.any,
  transform: _pt.oneOf(['none', 'capitalize', 'uppercase', 'lowercase']),
  icon: _pt.string,
  theme: _pt.object,
  containerStyle: _pt.any,
  style: _pt.any,
  rippleStyle: _pt.any,
  buttonRef: _pt.any
};

const buttonStyleGenerator = (variant, color, type) => {
  let style = {};

  switch (variant) {
    case 'text':
      style['backgroundColor'] = 'transparent';
      style['elevation'] = 0;
      style['shadowOpacity'] = 0;
      break;

    case 'outlined':
      style['borderWidth'] = 1;
      style['borderColor'] = Color(color).alpha(0.5).toString();
      style['backgroundColor'] = 'transparent';
      style['elevation'] = 0;
      style['shadowOpacity'] = 0;
      break;

    case 'contained':
      style['backgroundColor'] = color;
      break;

    default:
      break;
  }

  return style;
};

export default Button;