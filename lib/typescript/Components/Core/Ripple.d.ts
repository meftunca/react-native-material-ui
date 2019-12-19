import React from 'react';
import { ViewStyle, TouchableWithoutFeedbackProps, StyleProp } from 'react-native';
export interface RippleProps extends TouchableWithoutFeedbackProps {
    disabled?: boolean;
    children?: string | JSX.Element | JSX.Element[];
    style?: StyleProp<ViewStyle>;
    rippleColor?: string;
    rippleOpacity?: number;
    rippleDuration?: number;
    rippleSize?: number;
    rippleContainerBorderRadius?: number;
    rippleCentered?: boolean;
    rippleSequential?: boolean;
    rippleFades?: boolean;
    nativeID?: any;
    buttonRef?: any;
    onRippleAnimation?: () => void | null;
}
declare const Ripple: React.FC<RippleProps>;
export default Ripple;
