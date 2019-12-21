import React from 'react';
import {View} from 'react-native';
import Text from '../Core/Typography';
import Icon from '../Core/Icon';
export default function BottomBar({
  helperText,
  success,
  error,
  warning,
  count,
  eventCount,
  max,
  bottomWrapperStyle,
  helperTextStyle,
  helperWrapperStyle,
}) {
  return (
    <View style={bottomWrapperStyle}>
      {helperText && (
        <View style={helperWrapperStyle}>
          <Icon
            style={{...helperTextStyle, marginRight: 8, fontSize: 18}}
            name={
              success
                ? 'check'
                : error
                ? 'bug-outline'
                : warning
                ? 'alert'
                : 'lightbulb-outline'
            }
          />
          <Text style={helperTextStyle}>{helperText}</Text>
        </View>
      )}
      {count && (
        <View style={helperWrapperStyle}>
          <Text style={helperTextStyle}>{eventCount + ' / ' + max}</Text>
        </View>
      )}
    </View>
  );
}
