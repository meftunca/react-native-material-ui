import React from 'react';
import { View } from 'react-native';
import Text from '../Core/Typography';
import Icon from '../Core/Icon';
export default function BottomBar({ helperText, success, error, warning, count, eventCount, max, bottomWrapperStyle, helperTextStyle, helperWrapperStyle, }) {
    return (React.createElement(View, { style: bottomWrapperStyle },
        helperText && (React.createElement(View, { style: helperWrapperStyle },
            React.createElement(Icon, { style: { ...helperTextStyle, marginRight: 8, fontSize: 18 }, name: success
                    ? 'check'
                    : error
                        ? 'bug-outline'
                        : warning
                            ? 'alert'
                            : 'lightbulb-outline' }),
            React.createElement(Text, { style: helperTextStyle }, helperText))),
        count && (React.createElement(View, { style: helperWrapperStyle },
            React.createElement(Text, { style: helperTextStyle }, eventCount + ' / ' + max)))));
}
