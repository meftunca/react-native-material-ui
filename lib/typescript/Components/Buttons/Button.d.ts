import React from 'react';
import { RippleProps } from '../Core/Ripple';
import { TextProps } from '../Core/Typography';
import { SurfaceProps } from '../Core/Surface';
import { ViewStyle, StyleProp } from 'react-native';
import { IconFontFamily } from '../Core/Icon';
import propTypes from 'prop-types';
export declare type ButtonProps = RippleProps & {
    iconFontFamily?: IconFontFamily;
    variant?: 'text' | 'outlined' | 'contained';
    type?: 'button' | 'drawer' | 'dialog';
    role?: 'fab' | 'icon' | 'button';
    paperProps?: SurfaceProps;
    color?: string | 'primary' | 'secondary';
    cornerRadius?: number;
    elevation?: number;
    size?: number;
    dense?: boolean;
    fullWidth?: boolean;
    onLayout?: any;
    textProps?: TextProps;
    transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    icon?: string;
    theme?: object;
    containerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    rippleStyle?: StyleProp<ViewStyle>;
    buttonRef?: any;
    children?: string | React.ReactNode;
};
/**
 * General component description.
 */
export declare const Button: {
    ({ variant, children, cornerRadius, elevation, paperProps, color, role, style, size, type, dense, fullWidth, iconFontFamily, rippleStyle, onLayout, buttonRef, theme, containerStyle, icon, textProps, transform, ...props }: ButtonProps): JSX.Element;
    defaultProps: {
        variant: string;
        cornerRadius: number;
        elevation: number;
        paperProps: {
            padding: number[];
            margin: number;
        };
        role: string;
        size: number;
        type: string;
        dense: boolean;
        fullWidth: boolean;
        transform: string;
    };
    propTypes: {
        iconFontFamily: propTypes.Requireable<string>;
        variant: propTypes.Requireable<string>;
        /**
         * Description of prop "type" (a custom validation function).
         */
        type: propTypes.Requireable<string>;
        role: propTypes.Requireable<string>;
        paperProps: propTypes.Requireable<object>;
        color: propTypes.Requireable<string>;
        cornerRadius: propTypes.Requireable<number>;
        elevation: propTypes.Requireable<number>;
        size: propTypes.Requireable<number>;
        dense: propTypes.Requireable<boolean>;
        fullWidth: propTypes.Requireable<boolean>;
        onLayout: propTypes.Requireable<any>;
        textProps: propTypes.Requireable<any>;
        transform: propTypes.Requireable<string>;
        icon: propTypes.Requireable<string>;
        theme: propTypes.Requireable<object>;
        containerStyle: propTypes.Requireable<any>;
        style: propTypes.Requireable<any>;
        rippleStyle: propTypes.Requireable<any>;
        buttonRef: propTypes.Requireable<any>;
    };
};
export default Button;
