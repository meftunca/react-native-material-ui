import React from 'react';
import {View} from 'react-native';
import Text from '../Core/Typography';
export interface AppBarContentProps {
  title?: string;
  subtitle?: string;
  color?: string;
  subtitleProps?: any;
  titleProps?: any;
}
const Content: React.FC<AppBarContentProps> = ({
  title,
  subtitle,
  color,
  subtitleProps,
  titleProps,
  ...otherContentProps
}) => {
  return (
    <View
      style={{
        marginHorizontal: 16,
        marginVertical: 4,
        flexGrow: 1,
      }}>
      <Text
        variant="h6"
        paddingDisable={true}
        numberOfLines={1}
        gutterBottom={4}
        dense
        color={color}
        {...titleProps}
        {...otherContentProps}>
        {title}
      </Text>
      {subtitle && (
        <Text
          variant="subtitle2"
          dense
          numberOfLines={1}
          color={color}
          {...subtitleProps}
          {...titleProps}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};
Content.displayName = 'AppBar.Content';

export default Content;
