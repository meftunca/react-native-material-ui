import React from 'react';
import { TextProps } from '../Components/Core/Typography';
declare type ActionType = {
    color?: string;
    label?: string;
    accessibilityLabel?: string;
    onPress?: () => void;
};
declare type AlertType = {
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
declare type SnackbarType = {
    label: string;
    color?: string;
    backgroundColor?: string;
    elevation?: number;
    action?: ActionType | undefined;
    isOpen?: boolean;
};
export declare type Settings = {
    children?: React.ReactNode;
    onToggleAlert?: (status: boolean) => void | undefined;
    onToggleSnackbar?: (status: boolean) => void | undefined;
    setAlert: (data: AlertType) => void;
    setSnacbar: (data: SnackbarType) => void;
    isOpenSnacbar?: number;
};
export declare const Provider: React.FC<{
    value?: Settings;
}>;
export declare const useAlert: () => {
    setAlert: (data: AlertType) => void;
    onDismiss: () => void;
    onOpen: () => void;
};
export declare const useSnackbar: () => {
    setSnacbar: (data: SnackbarType) => void;
    isOpen: number;
    onDismiss: () => void;
    onOpen: () => void;
    onToggle: (status: boolean) => void;
};
export {};
