import React from 'react';
import {
  Text as TextBase,
  TextProps as TextBaseProps,
  PixelRatio,
  Platform,
  Animated,
} from 'react-native';
import Color from 'color';
import {withTheme, ThemeTypes} from 'Theming';
const AnimatedText = Animated.createAnimatedComponent(TextBase);
export interface TextProps extends React.ComponentProps<typeof TextBase> {
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
  fontSize?: number;
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
  color?: 'primary' | 'secondary' | string;
  contrast?: number | boolean;
  dense?: boolean;
  gutterBottom?: number;
  letterSpacing?: number;
  children?: any;
  align?: 'center' | 'left' | 'right' | 'justify';
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  theme: ThemeTypes;
}
// const Text: React.FC<TextProps> = ({
//   variant = 'body1',
//   children,
//   style,
//   weight,
//   letterSpacing,
//   gutterBottom,
//   contrast = true,
//   dense = false,
//   align = 'left',
//   transform = 'none',
//   color = '#000000',
//   ...rest
// }) => {
//   return (
//     <TextBase
//       {...rest}
//       style={[
//         {
//           marginBottom: gutterBottom || 0,
//           fontFamily: Platform.select({android: 'Roboto', ios: 'System'}),
//           fontSize:
//             fontSizes[variant] / PixelRatio.getFontScale() - (dense ? 2 : 0),
//           color: contrast
//             ? Color(color)
//                 .alpha(
//                   typeof contrast === 'number' ? contrast : contrasts[variant],
//                 )
//                 .toString()
//             : color,
//           fontWeight: weight || fontWeights[variant],
//           letterSpacing: letterSpacing || letterSpacingsList[variant],
//           // lineHeight: lineHeights[variant],
//           textAlign: align,
//           textTransform: transform,
//         },
//         style,
//       ]}>
//       {children}
//     </TextBase>
//   );
// };

class Typography extends React.PureComponent<TextProps> {
  render() {
    const {
      variant = 'body1',
      children,
      style,
      weight,
      letterSpacing,
      theme,
      gutterBottom,
      fontSize,
      contrast = true,
      dense = false,
      align = 'left',
      transform = 'none',
      color = '#000000',
      ...rest
    } = this.props;
    const themes = theme?.typography;
    return (
      <AnimatedText
        {...rest}
        style={[
          {
            marginBottom: gutterBottom || 0,
            fontFamily: Platform.select({android: 'Roboto', ios: 'System'}),
            fontSize:
              fontSize ||
              (themes?.fontSizes[variant] || 14) / PixelRatio.getFontScale() -
                (dense ? 2 : 0),
            color: contrast
              ? Color(color)
                  .alpha(
                    typeof contrast === 'number'
                      ? contrast
                      : themes?.contrasts[variant] || 0,
                  )
                  .toString()
              : color,
            fontWeight: weight || themes?.fontWeights[variant],
            letterSpacing: letterSpacing || themes?.letterSpacings[variant],
            // lineHeight: lineHeights[variant],
            textAlign: align,
            textTransform: transform,
          },
          style,
        ]}>
        {children}
      </AnimatedText>
    );
  }
}

export default withTheme(Typography);
