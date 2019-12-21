import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TextProps } from 'Components/Core/Typography';
import { RippleProps } from 'Components/Core/Ripple';
import { ThemeTypes } from 'Theming';
declare type listHorizontalItemType = (props: {
    color?: string;
    size?: number;
    dense?: boolean;
    style?: {};
    containerStyle?: {};
}) => React.ReactNode;
export interface ListItemProps extends RippleProps {
    containerStyle?: StyleProp<ViewStyle>;
    left?: listHorizontalItemType;
    right?: listHorizontalItemType;
    padding?: number[] | number;
    type?: 'largeImage' | 'image' | 'avatar' | 'radio' | 'checkbox' | 'icon' | undefined;
    margin?: number[] | string;
    color?: string;
    dense?: boolean;
    title?: string;
    subtitle?: string;
    titleProps?: TextProps;
    subtitleProps?: TextProps;
    theme?: ThemeTypes;
}
declare const ListItem: React.FC<ListItemProps>;
export default ListItem;
