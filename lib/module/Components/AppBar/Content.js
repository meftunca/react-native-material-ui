import React from 'react';
import { View } from 'react-native';
import Text from '../Core/Typography';
const Content = ({ primary, secondary, color, secondaryProps, primaryProps, ...titleProps }) => {
    return (React.createElement(View, { style: {
            marginHorizontal: 16,
            marginVertical: 4,
            flexGrow: 1,
        } },
        React.createElement(Text, Object.assign({ variant: "h6", paddingDisable: true, numberOfLines: 1, gutterBottom: 4, dense: true, color: color }, primaryProps, titleProps), primary),
        secondary && (React.createElement(Text, Object.assign({ variant: "subtitle2", dense: true, numberOfLines: 1, color: color }, secondaryProps, titleProps), secondary))));
};
Content.displayName = 'Content';
export default Content;
