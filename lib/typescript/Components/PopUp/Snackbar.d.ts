import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type ActionType = {
    color?: string;
    label?: string;
    accessibilityLabel?: string;
    onPress?: () => void;
};
declare type SnackbarType = {
    label: string;
    color?: string;
    style?: StyleProp<ViewStyle>;
    backgroundColor?: string;
    elevation?: number;
    action?: ActionType | undefined;
    isOpen?: boolean;
    onDismiss?: () => void;
};
declare const Snackbar: React.FC<SnackbarType>;
export default Snackbar;
