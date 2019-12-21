import React from 'react';
import { StyleProp, ImageStyle } from 'react-native';
import { SurfaceProps } from './../Core/Surface';
import { TextProps } from './../Core/Typography';
import { ThemeTypes } from 'Theming';
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
}
interface WrapProps extends SurfaceProps {
    Header: React.FC<HeaderProps>;
    Content: React.FC<SurfaceProps>;
    Actions: React.FC<SurfaceProps>;
}
declare const Card: React.FC<SurfaceProps & {
    theme?: ThemeTypes;
}> & WrapProps;
export default Card;
