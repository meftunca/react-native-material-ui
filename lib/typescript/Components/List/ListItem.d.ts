import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TextProps } from './../Core/Typography';
import { RippleProps } from 'Components/Core/Ripple';
declare type listHorizontalItemType = (props: {
    color?: string;
    size?: number;
    dense?: boolean;
    style?: {};
}) => React.ReactNode;
declare type themeProps = {
    color?: {
        primaryText?: string;
        secondaryText?: string;
    };
};
export interface ListItemProps extends RippleProps {
    containerStyle?: StyleProp<ViewStyle>;
    left?: listHorizontalItemType;
    right?: listHorizontalItemType;
    padding?: number[] | number;
    type?: 'avatar' | 'radio' | 'checkbox' | undefined;
    margin?: number[] | string;
    color?: string;
    dense?: boolean;
    title?: string;
    subtitle?: string;
    titleProps?: TextProps;
    subtitleProps?: TextProps;
    theme?: themeProps;
}
declare const ListItem: React.FC<ListItemProps>;
export default ListItem;
