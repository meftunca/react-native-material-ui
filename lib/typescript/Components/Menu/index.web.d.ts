import React from 'react';
interface renderType {
    onDismiss?: () => void | null;
}
interface MenuProps {
    children?: React.ReactNode;
    trigger?: JSX.Element;
    render?: React.FC<renderType> | undefined;
    corderRadius?: number;
    duration?: number;
    delay?: number;
    minWidth?: number;
    elevation?: number;
}
declare const Menu: React.FC<MenuProps>;
export default Menu;
