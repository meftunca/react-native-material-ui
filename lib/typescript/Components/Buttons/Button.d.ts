import React from 'react';
import { RippleProps } from './../Core/Ripple';
import { TextProps } from './../Core/Typography';
import { SurfaceProps } from './../Core/Surface';
import { ViewStyle, StyleProp } from 'react-native';
import { IconFontFamily } from '../Core/Icon';
export interface ButtonProps extends RippleProps {
    iconFontFamily?: IconFontFamily;
    variant?: 'text' | 'outlined' | 'contained';
    type?: 'button' | 'drawer' | 'dialog';
    role?: 'fab' | 'icon' | 'button';
    paperProps?: SurfaceProps;
    color?: string;
    radius?: number;
    size?: number;
    dense?: boolean;
    fullWidth?: boolean;
    onLayout?: any;
    textProps?: TextProps;
    transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    icon?: string;
    theme?: object;
    contentContainerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    rippleStyle?: StyleProp<ViewStyle>;
    buttonRef?: any;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
