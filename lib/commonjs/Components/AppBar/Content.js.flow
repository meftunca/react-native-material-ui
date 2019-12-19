import React from 'react';
import {View} from 'react-native';
import Text from '../Core/Typography';
export interface AppBarContentProps {
  primary?: string;
  secondary?: string;
  color?: string;
  secondaryProps?: any;
  primaryProps?: any;
}
const Content: React.FC<AppBarContentProps> = ({
  primary,
  secondary,
  color,
  secondaryProps,
  primaryProps,
  ...titleProps
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
        {...primaryProps}
        {...titleProps}>
        {primary}
      </Text>
      {secondary && (
        <Text
          variant="subtitle2"
          dense
          numberOfLines={1}
          color={color}
          {...secondaryProps}
          {...titleProps}>
          {secondary}
        </Text>
      )}
    </View>
  );
};
Content.displayName = 'Content';

export default Content;
