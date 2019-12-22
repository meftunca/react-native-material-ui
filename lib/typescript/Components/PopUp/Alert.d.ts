import React from 'react';
import { TextProps } from '../Core/Typography';
declare type ActionType = {
    color?: string;
    label?: string;
    accessibilityLabel?: string;
    onPress?: (event?: any) => void;
};
declare type AlertType = {
    onDismiss?: () => void | undefined;
    header?: {
        title?: string;
        subtitle?: string;
        titleProps?: TextProps;
        subtitleProps?: TextProps;
    };
    prompt?: boolean;
    contentText?: string;
    action?: ActionType[];
    isOpen?: boolean;
};
declare const Alert: React.FC<AlertType>;
export default Alert;
