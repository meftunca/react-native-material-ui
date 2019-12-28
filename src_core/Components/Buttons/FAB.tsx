import React from 'react';
import Ripple, {RippleProps} from '../Core/Ripple';
import Surface, {SurfaceProps} from '../Core/Surface';
import {ViewStyle, StyleProp, View} from 'react-native';
import Icon, {IconFontFamily} from '../Core/Icon';
import Color from 'color';
import {useTheme} from '../../Theming';
import Text, {TextProps} from '../Core/Typography';

export interface FABProps extends RippleProps {
  iconFontFamily?: IconFontFamily;
  role?: 'fab' | 'icon' | 'button';
  paperProps?: SurfaceProps;
  color?: // | string
  string | ('primary' | 'secondary' | 'accent' | 'error' | 'warning' | 'text');
  size?: number;
  onLayout?: any; // bu kısımı sonrada düzenle
  icon?: string;
  label?: string;
  theme?: object;
  dense?: boolean;
  labelProps?: TextProps;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  rippleStyle?: StyleProp<ViewStyle>;
}
const FAB: React.FC<FABProps> = ({
  children,
  paperProps = {padding: [4, 8], margin: 2},
  color = 'primary',
  label,
  style,
  dense,
  size = 24,
  iconFontFamily,
  rippleStyle,
  labelProps,
  onLayout,
  theme,
  contentContainerStyle,
  icon,
  ...props
}) => {
  const themeControl: any = useTheme(theme);
  let fabColor: string =
      color && color in themeControl.color
        ? themeControl.color[color]
        : color
        ? color
        : themeControl.color.primary,
    foreColor: string = Color(fabColor).isDark() ? 'white' : 'black';

  return (
    <View
      onLayout={onLayout}
      style={[
        {
          borderRadius: size * 2,
          overflow: 'hidden',
          margin: dense ? 8 : 16,
          //   minHeight: dense ? 32 : 60,
          //   minWidth: dense ? 32 : 60,
        },
        contentContainerStyle,
      ]}>
      <Ripple
        {...props}
        rippleContainerBorderRadius={size}
        style={[
          rippleStyle,
          {
            borderRadius: size,
            overflow: 'hidden',
            padding: 4,
          },
        ]}
        rippleColor={Color(fabColor)
          .darken(0.4)
          .fade(0.1)
          .toString()}>
        <Surface
          {...paperProps}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          padding={dense ? 8 : 16}
          margin={0}
          style={[
            style,
            {
              backgroundColor: fabColor,
              borderRadius: size * 2,
              height: dense && label ? 48 : dense ? 40 : 56,
              minWidth: dense ? 40 : 56,
            },
          ]}>
          {icon !== undefined && (
            <Icon
              name={icon}
              color={foreColor}
              family={iconFontFamily}
              size={size}
              style={{
                marginRight: label ? 12 : 0,
              }}
            />
          )}
          {label !== undefined && (
            <Text
              color={foreColor}
              variant="button"
              transform="uppercase"
              {...labelProps}
              style={[
                labelProps?.style,
                {
                  marginRight: 20 - (dense ? 8 : 16),
                },
              ]}>
              {label}
            </Text>
          )}
        </Surface>
      </Ripple>
    </View>
  );
};

export default FAB;
