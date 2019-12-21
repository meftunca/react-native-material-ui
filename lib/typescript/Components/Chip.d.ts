import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { IconButtonProps } from './Buttons/IconButton';
import { RippleProps } from './Core/Ripple';
import { ThemeTypes } from '../Theming';
interface ChipProps extends RippleProps {
    avatarSource?: ImageSourcePropType;
    icon?: string;
    label?: string;
    variant?: 'flat' | 'outlined';
    color?: string;
    selectedColor?: string;
    selectedIcon?: string;
    elevation?: number;
    isSelected?: boolean;
    onSelect?: (status: boolean) => void | undefined;
    action?: (props?: IconButtonProps) => JSX.Element;
    theme?: ThemeTypes;
}
declare const Chip: React.FC<ChipProps>;
export default Chip;
