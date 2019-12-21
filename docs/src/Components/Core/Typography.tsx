import React from 'react';
import {
  Text as TextBase,
  TextProps as TextBaseProps,
  PixelRatio,
  Platform,
  Animated,
  StyleProp,
  TextStyle,
} from 'react-native';
import Color from 'color';
import {ThemeTypes, useTheme} from 'Theming';
const AnimatedText = Animated.createAnimatedComponent(TextBase);
export type TextProps = TextBaseProps & {
  weight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 'bold';
  size?: number;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline';
  color?: Animated.Value | 'primary' | 'secondary' | string;
  contrast?: number | boolean;
  dense?: boolean;
  animated?: boolean;
  gutterBottom?: number;
  letterSpacing?: number;
  style?: StyleProp<TextStyle>;
  children?: any;
  align?: 'center' | 'left' | 'right' | 'justify';
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  theme?: any;
};
const Text: React.FC<TextProps> = ({
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
  let {typography, color: colors} = useTheme(theme);
  // const themes = theme?.typography;
  return (
    <AnimatedText
      {...rest}
      style={[
        {
          marginBottom: gutterBottom || 0,
          fontFamily: Platform.select({android: 'Roboto', ios: 'System'}),
          fontSize:
            size ||
            (typography?.fontSizes[variant] || 14) / PixelRatio.getFontScale() -
              (dense ? 2 : 0),
          color: animated
            ? color
            : contrast
            ? Color(color || colors.text)
                .alpha(
                  typeof contrast === 'number'
                    ? contrast
                    : typography?.contrasts[variant] || 0,
                )
                .toString()
            : color || colors.text,
          fontWeight: weight || typography?.fontWeights[variant],
          letterSpacing: letterSpacing || typography?.letterSpacings[variant],
          // lineHeight: lineHeights[variant],
          textAlign: align,
          textTransform: transform,
        },
        style,
      ]}>
      {children}
    </AnimatedText>
  );
};

// class Typography extends React.PureComponent<TextProps> {
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

export default Text;
