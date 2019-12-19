import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle, ImageStyle} from 'react-native';
import Surface from 'Components/Core/Surface';
import Text, {TextProps} from 'Components/Core/Typography';
import Ripple, {RippleProps} from 'Components/Core/Ripple';

type listHorizontalItemType = (props: {
  color?: string;
  size?: number;
  dense?: boolean;
  style?: {};
  containerStyle?: {};
}) => React.ReactNode;
type themeProps = {
  color?: {
    primaryText?: string;
    secondaryText?: string;
  };
};
export interface ListItemProps extends RippleProps {
  containerStyle?: StyleProp<ViewStyle>;
  left?: listHorizontalItemType;
  right?: listHorizontalItemType;
  padding?: number[] | number;
  type?: 'largeImage' | 'image' | 'avatar' | 'radio' | 'checkbox' | 'icon';
  margin?: number[] | string;
  color?: string;
  dense?: boolean;
  title?: string;
  subtitle?: string;
  titleProps?: TextProps;
  subtitleProps?: TextProps;
  theme?: themeProps;
}

const ListItem: React.FC<ListItemProps> = ({
  padding,
  margin = 0,
  left,
  color = '#333',
  title,
  subtitle,
  dense,
  containerStyle,
  titleProps,
  subtitleProps,
  type,
  theme = {
    color: {
      primaryText: '#333333',
    },
  },
  right,
  ...props
}) => {
  padding = padding || [subtitle ? 16 : type === 'avatar' ? 8 : 12, 0];
  return (
    <Ripple {...props}>
      <Surface
        padding={padding}
        margin={margin}
        justify="space-between"
        style={[{minHeight: dense ? 60 : 72}, containerStyle]}>
        {left &&
          left({
            size:
              type === 'largeImage' || type === 'image'
                ? 56
                : type === 'avatar'
                ? 40
                : 24,
            color,
            dense,
            containerStyle: {
              marginLeft: type === 'largeImage' ? 0 : 16,
              marginTop: type === 'icon' ? 16 : type === 'avatar' ? 8 : 6,
            },
          })}
        <View
          style={{
            marginLeft: 16,
            flexGrow: 1,
            marginVertical: 12,
            justifyContent: 'center',
            alignContent: 'flex-start',
          }}>
          <Text
            variant="subtitle1"
            gutterBottom={subtitle ? 2 : 0}
            transform="capitalize"
            {...titleProps}>
            {title}
          </Text>
          {subtitle && (
            <Text variant="subtitle2" contrast={0.7} {...subtitleProps}>
              {subtitle}
            </Text>
          )}
        </View>
        {right &&
          right({
            size: 24,
            containerStyle: {marginHorizontal: 16, marginTop: 6},
            color,
            dense,
          })}
      </Surface>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  container: {},
});
ListItem.displayName = 'List.Item';
export default ListItem;
