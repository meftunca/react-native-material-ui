import React from 'react';
import { ViewProps } from 'react-native';
export declare type IconFontFamily = 'material' | 'materialCommunity' | 'simpleLine' | 'fa' | 'fa5' | 'fa5pro' | 'foundation' | 'evil' | 'octicons' | 'ionic' | 'feather' | 'entypo' | 'zocial';
interface IconProps extends ViewProps {
    family?: IconFontFamily;
    name?: string;
    iosOnly?: string;
    androidOnly?: string;
    size?: number;
    color?: string;
}
export default class Icon extends React.PureComponent<IconProps> {
    render(): JSX.Element;
}
export {};
