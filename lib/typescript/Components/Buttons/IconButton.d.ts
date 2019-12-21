import React from 'react';
import { RippleProps } from './../Core/Ripple';
import { SurfaceProps } from './../Core/Surface';
import { ViewStyle, StyleProp } from 'react-native';
import { IconFontFamily } from '../Core/Icon';
export interface IconButtonProps extends RippleProps {
    iconFontFamily?: IconFontFamily;
    role?: 'icon' | 'chip';
    paperProps?: SurfaceProps;
    color?: // | string
    string | ('primary' | 'secondary' | 'accent' | 'error' | 'warning' | 'text');
    backgroundColor?: string;
    size?: number;
    icon?: string;
    theme?: object;
    containerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    rippleStyle?: StyleProp<ViewStyle>;
}
declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
