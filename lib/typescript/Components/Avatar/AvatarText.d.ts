import React from 'react';
import { StyleProp, ViewStyle, ImageStyle } from 'react-native';
import { TextProps } from '../Core/Typography';
import { ThemeTypes } from '../../Theming';
export interface AvatarTextProps {
    elevation?: number;
    size?: number;
    style?: StyleProp<ImageStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    padding?: number;
    color?: string;
    backgroundColor?: string;
    label?: string;
    theme?: ThemeTypes;
    textProps?: TextProps;
}
declare const AvatarText: React.FC<AvatarTextProps>;
export default AvatarText;
