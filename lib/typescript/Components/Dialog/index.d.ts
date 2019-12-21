import React from 'react';
import { StyleProp, ImageStyle } from 'react-native';
import { SurfaceProps } from '../Core/Surface';
import { TextProps } from '../Core/Typography';
interface HeaderProps extends SurfaceProps {
    left?: React.FC<{
        size?: number;
        style?: StyleProp<ImageStyle>;
    }>;
    right?: React.FC<{
        size?: number;
        style?: StyleProp<ImageStyle>;
    }>;
    title?: JSX.Element | string;
    subtitle?: JSX.Element | string;
    titleProps?: TextProps;
    subtitleProps?: TextProps;
    fullScreen?: boolean;
}
interface WrapProps {
    Header: React.FC<HeaderProps>;
    Content: React.FC<SurfaceProps>;
    Actions: React.FC<SurfaceProps>;
}
interface DialogProps extends SurfaceProps {
    visible?: boolean;
    backdropColor?: string;
    onClose?: () => void | undefined;
    fullScreen?: boolean;
    animationType?: 'fade' | 'slide' | 'none';
    duration?: number;
    delay?: number;
}
declare const Dialog: React.FC<DialogProps> & WrapProps;
export default Dialog;
