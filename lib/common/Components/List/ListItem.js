import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Surface from '../Core/Surface';
import Text from '../Core/Typography';
import Ripple from '../Core/Ripple';
import { useTheme } from '../../Theming';

const ListItem = ({
  padding,
  margin = 0,
  left,
  color,
  title,
  subtitle,
  dense,
  containerStyle,
  titleProps,
  subtitleProps,
  type,
  theme,
  right,
  ...props
}) => {
  theme = useTheme(theme);
  color = color || theme.color.text;
  padding = padding || [type === 'avatar' ? 8 : subtitle ? 16 : 12, 0];
  return React.createElement(Ripple, props, React.createElement(Surface, {
    padding: padding,
    margin: margin,
    justify: "space-between",
    style: [{
      minHeight: dense ? 60 : 72
    }, containerStyle]
  }, left && left({
    size: type === 'largeImage' || type === 'image' ? 56 : type === 'avatar' ? 40 : 24,
    color,
    dense,
    containerStyle: {
      marginLeft: type === 'largeImage' ? 0 : 16,
      marginTop: type === 'icon' ? 16 : type === 'avatar' ? 8 : 6
    }
  }), React.createElement(View, {
    style: {
      marginLeft: 16,
      flexGrow: 1,
      marginVertical: type === undefined ? 12 : 4,
      justifyContent: 'center',
      alignContent: 'flex-start'
    }
  }, React.createElement(Text, _extends({
    variant: "subtitle1",
    gutterBottom: subtitle ? 2 : 0,
    transform: "capitalize"
  }, titleProps), title), subtitle && React.createElement(Text, _extends({
    variant: "subtitle2",
    contrast: 0.7
  }, subtitleProps), subtitle)), right && right({
    size: 24,
    containerStyle: {
      marginHorizontal: 16,
      marginTop: 6
    },
    color,
    dense
  })));
};

ListItem.propTypes = {
  containerStyle: _pt.any,
  left: _pt.func,
  right: _pt.func,
  padding: _pt.oneOfType([_pt.arrayOf(_pt.number), _pt.number]),
  type: _pt.oneOfType([_pt.oneOf(['largeImage']), _pt.oneOf(['image']), _pt.oneOf(['avatar']), _pt.oneOf(['radio']), _pt.oneOf(['checkbox']), _pt.oneOf(['icon'])]),
  margin: _pt.oneOfType([_pt.arrayOf(_pt.number), _pt.string]),
  color: _pt.string,
  dense: _pt.bool,
  title: _pt.string,
  subtitle: _pt.string,
  titleProps: _pt.any,
  subtitleProps: _pt.any,
  theme: _pt.any
};
const styles = StyleSheet.create({
  container: {}
});
ListItem.displayName = 'List.Item';
export default ListItem;