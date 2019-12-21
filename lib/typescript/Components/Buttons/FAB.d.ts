import React from 'react';
import { RippleProps } from '../Core/Ripple';
import { SurfaceProps } from '../Core/Surface';
import { ViewStyle, StyleProp } from 'react-native';
import { IconFontFamily } from '../Core/Icon';
import { TextProps } from '../Core/Typography';
export interface FABProps extends RippleProps {
    iconFontFamily?: IconFontFamily;
    role?: 'fab' | 'icon' | 'button';
    paperProps?: SurfaceProps;
    color?: // | string
    string | ('primary' | 'secondary' | 'accent' | 'error' | 'warning' | 'text');
    size?: number;
    onLayout?: any;
    icon?: string;
    label?: string;
    theme?: object;
    dense?: boolean;
    labelProps?: TextProps;
    contentContainerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    rippleStyle?: StyleProp<ViewStyle>;
}
declare const FAB: React.FC<FABProps>;
export default FAB;
