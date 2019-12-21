import React from 'react';
import { ViewProps } from 'react-native';
import { AppBarContentProps } from './Content';
import { IconButtonProps } from 'Components/Buttons/IconButton';
import { ThemeTypes } from 'Theming';
interface AppBarProps extends ViewProps {
    varint?: 'top' | 'bottom';
    subChildren?: any | React.ReactNode;
    subChildrenProps?: any;
    color?: string;
    elevation?: number;
    theme?: ThemeTypes;
}
interface CompoundProps {
    Content: React.FC<AppBarContentProps>;
    Grow: React.FC;
    Action: React.FC<IconButtonProps>;
}
declare const AppBar: React.FC<AppBarProps> & CompoundProps;
export default AppBar;
