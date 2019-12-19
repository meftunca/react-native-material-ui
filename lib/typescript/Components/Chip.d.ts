import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { IconButtonProps } from './Buttons/IconButton';
import { RippleProps } from './Core/Ripple';
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
    action?: (props?: IconButtonProps) => JSX.Element;
}
declare const Chip: React.FC<ChipProps>;
export default Chip;
