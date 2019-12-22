import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Text as TextBase, PixelRatio, Platform, Animated } from 'react-native';
import Color from 'color';
import { useTheme } from '../../Theming';
const AnimatedText = Animated.createAnimatedComponent(TextBase);

const Text = ({
  variant = 'body1',
  children,
  style,
  weight,
  letterSpacing,
  theme,
  gutterBottom,
  size,
  contrast = true,
  dense = false,
  animated,
  align = 'left',
  transform = 'none',
  color,
  ...rest
}) => {
  let {
    typography,
    color: colors
  } = useTheme(theme); // const themes = theme?.typography;

  return React.createElement(AnimatedText, _extends({}, rest, {
    style: [{
      marginBottom: gutterBottom || 0,
      fontFamily: Platform.select({
        android: 'Roboto',
        ios: 'System'
      }),
      fontSize: size || ((typography === null || typography === void 0 ? void 0 : typography.fontSizes[variant]) || 14) / PixelRatio.getFontScale() - (dense ? 2 : 0),
      color: animated ? color : contrast ? Color(color || colors.text).alpha(typeof contrast === 'number' ? contrast : (typography === null || typography === void 0 ? void 0 : typography.contrasts[variant]) || 0).toString() : color || colors.text,
      fontWeight: weight || (typography === null || typography === void 0 ? void 0 : typography.fontWeights[variant]),
      letterSpacing: letterSpacing || (typography === null || typography === void 0 ? void 0 : typography.letterSpacings[variant]),
      // lineHeight: lineHeights[variant],
      textAlign: align,
      textTransform: transform
    }, style]
  }), children);
}; // class Typography extends React.PureComponent<TextProps> {
//   render() {
//     const {
//       variant = 'body1',
//       children,
//       style,
//       weight,
//       letterSpacing,
//       theme,
//       gutterBottom,
//       fontSize,
//       contrast = true,
//       dense = false,
//       align = 'left',
//       transform = 'none',
//       color = '#000000',
//       ...rest
//     } = this.props;
//     const themes = theme?.typography;
//     return (
//       <AnimatedText
//         {...rest}
//         style={[
//           {
//             marginBottom: gutterBottom || 0,
//             fontFamily: Platform.select({android: 'Roboto', ios: 'System'}),
//             fontSize:
//               fontSize ||
//               (themes?.fontSizes[variant] || 14) / PixelRatio.getFontScale() -
//                 (dense ? 2 : 0),
//             color: contrast
//               ? Color(color)
//                   .alpha(
//                     typeof contrast === 'number'
//                       ? contrast
//                       : themes?.contrasts[variant] || 0,
//                   )
//                   .toString()
//               : color,
//             fontWeight: weight || themes?.fontWeights[variant],
//             letterSpacing: letterSpacing || themes?.letterSpacings[variant],
//             // lineHeight: lineHeights[variant],
//             textAlign: align,
//             textTransform: transform,
//           },
//           style,
//         ]}>
//         {children}
//       </AnimatedText>
//     );
//   }
// }


Text.propTypes = {
  weight: _pt.oneOf(['100', '200', '300', '400', '500', '600', '700', '800', '900', 'bold']),
  size: _pt.number,
  variant: _pt.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline']),
  color: _pt.oneOfType([_pt.any, _pt.oneOf(['primary']), _pt.oneOf(['secondary']), _pt.string]),
  contrast: _pt.oneOfType([_pt.number, _pt.bool]),
  dense: _pt.bool,
  animated: _pt.bool,
  gutterBottom: _pt.number,
  letterSpacing: _pt.number,
  style: _pt.any,
  children: _pt.any,
  align: _pt.oneOf(['center', 'left', 'right', 'justify']),
  transform: _pt.oneOf(['uppercase', 'lowercase', 'capitalize', 'none']),
  theme: _pt.any
};
export default Text;