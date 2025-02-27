import React from 'react';
import {Animated, StyleSheet, Platform} from 'react-native';
import Ripple, {RippleProps} from '../Core/Ripple';
import Text, {TextProps} from '../Core/Typography';
import Surface, {SurfaceProps} from '../Core/Surface';
import {ViewStyle, StyleProp} from 'react-native';
import Icon, {IconFontFamily} from '../Core/Icon';
import Color from 'color';
import {useTheme} from '../../Theming';
import {elevationShadowStyle} from '../../Helpers/styleGenerator';
import propTypes from 'prop-types';
export type ButtonProps = RippleProps & {
  iconFontFamily?: IconFontFamily;
  variant?: 'text' | 'outlined' | 'contained';
  type?: 'button' | 'drawer' | 'dialog';
  role?: 'fab' | 'icon' | 'button';
  paperProps?: SurfaceProps;
  color?: string | 'primary' | 'secondary';
  cornerRadius?: number;
  elevation?: number;
  size?: number;
  dense?: boolean;
  fullWidth?: boolean;
  onLayout?: any; // bu kısımı sonrada düzenle
  textProps?: TextProps;
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  icon?: string;
  theme?: object;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  rippleStyle?: StyleProp<ViewStyle>;
  buttonRef?: any;
  children?: string | React.ReactNode;
};

/**
 * General component description.
 */
export const Button = ({
  variant = 'text',
  children,
  cornerRadius = 4,
  elevation = 2,
  paperProps = {padding: [0, 8], margin: 2},
  color = '#000',
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
}: ButtonProps) => {
  const themeControl = useTheme(theme);
  const isDefaultButton: boolean = role === 'button';
  color =
    color && color in themeControl.color
      ? themeControl.color[color]
      : color
      ? color
      : themeControl.color.primary;
  let textColor =
    !color && role === 'button'
      ? themeControl.color.primary
      : role !== 'button'
      ? themeControl.color.primary
      : Color(color).isDark()
      ? variant === 'contained'
        ? 'white'
        : color
      : color;
  return (
    <Ripple
      rippleOpacity={Color(textColor).isDark() ? 0.4 : undefined}
      style={[
        rippleStyle,
        {
          margin: 4,
          borderRadius: cornerRadius,
          overflow: 'hidden',
        },
        buttonStyleGenerator(
          isDefaultButton ? variant : role === 'fab' ? 'contained' : 'text',
          variant === 'contained' ? color : textColor,
        ),
        variant === 'contained' && elevationShadowStyle(elevation),
      ]}
      rippleDuration={300}
      rippleColor={
        Color(variant !== 'contained' ? color : textColor).isDark()
          ? Color(variant !== 'contained' ? color : textColor)
              .lighten(0.7)
              .rgb()
              .toString()
          : Color(variant !== 'contained' ? color : textColor)
              .darken(0.2)
              .toString()
      }
      {...props}>
      <Animated.View
        ref={buttonRef}
        onLayout={onLayout}
        style={[
          {
            borderRadius: !isDefaultButton
              ? dense
                ? size - 4
                : size + 4
              : cornerRadius,
            overflow: 'hidden',
          },
          containerStyle,
          !isDefaultButton && fullWidth === false
            ? {alignSelf: 'flex-start'}
            : {},
        ]}>
        <Surface
          {...paperProps}
          direction="row"
          justify={type === 'drawer' ? 'flex-start' : 'center'}
          alignItems="center"
          alignContent="center"
          margin={[0, 8]}
          padding={0}
          style={StyleSheet.flatten([
            style,
            {
              backgroundColor: 'transparent',
              borderRadius: cornerRadius,
              minHeight: 36,
              // minWidth: 64,
            },
          ])}>
          {icon && (
            <Icon
              name={icon}
              color={
                type === 'button' && variant === 'contained'
                  ? Color(textColor).isDark()
                    ? 'white'
                    : textColor
                  : textColor
              }
              family={iconFontFamily}
              size={size - (dense ? 4 : 0)}
              style={{
                marginLeft: 8,
              }}
            />
          )}
          {role === 'button' && (
            <>
              {typeof children === 'string' ? (
                <Text
                  dense={dense}
                  style={{
                    textTransform: transform,
                    textAlign: 'center',
                    marginHorizontal: 8,
                  }}
                  weight="500"
                  variant="button"
                  {...textProps}
                  contrast={1}
                  color={
                    type === 'button' && variant === 'contained'
                      ? Color(textColor).isDark()
                        ? 'white'
                        : themeControl.dark
                        ? 'white'
                        : textColor
                      : textColor
                  }>
                  {children}
                </Text>
              ) : (
                children
              )}
            </>
          )}
        </Surface>
      </Animated.View>
    </Ripple>
  );
};

const buttonStyleGenerator = (variant: string, color: string) => {
  let style: any = {};
  switch (variant) {
    case 'text':
      style['backgroundColor'] = 'transparent';
      style['elevation'] = 0;
      style['shadowOpacity'] = 0;
      break;
    case 'outlined':
      style['borderWidth'] = 1;
      style['borderColor'] = Color(color)
        .alpha(0.5)
        .toString();
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
Button.defaultProps = {
  variant: 'text',
  cornerRadius: 4,
  elevation: 2,
  paperProps: {padding: [0, 8], margin: 2},
  role: 'button',
  size: 20,
  type: 'button',
  dense: false,
  fullWidth: false,
  transform: 'capitalize',
};
Button.propTypes = {
  iconFontFamily: propTypes.oneOf([
    'material',
    'materialCommunity',
    'simpleLine',
    'fa',
    'fa5',
    'fa5pro',
    'foundation',
    'evil',
    'octicons',
    'ionic',
    'feather',
    'entypo',
    'zocial',
  ]),
  variant: propTypes.oneOf(['text', 'outlined', 'contained']),

  /**
   * Description of prop "type" (a custom validation function).
   */
  type: propTypes.oneOf(['button', 'drawer', 'dialog']),
  role: propTypes.oneOf(['fab', 'icon', 'button']),
  paperProps: propTypes.object,
  color: propTypes.oneOfType([
    propTypes.string,
    propTypes.oneOf(['primary']),
    propTypes.oneOf(['secondary']),
  ]),
  cornerRadius: propTypes.number,
  elevation: propTypes.number,
  size: propTypes.number,
  dense: propTypes.bool,
  fullWidth: propTypes.bool,
  onLayout: propTypes.any,

  /* bu kısımı sonrada düzenle*/
  textProps: propTypes.any,
  transform: propTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase']),
  icon: propTypes.string,
  theme: propTypes.object,
  containerStyle: propTypes.any,
  style: propTypes.any,
  rippleStyle: propTypes.any,
  buttonRef: propTypes.any,
};
export default Button;
