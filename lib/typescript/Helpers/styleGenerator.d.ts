import { Animated } from 'react-native';
export declare const directionRepeat: (prefix: "padding" | "margin" | "border", list: number[] | string[]) => any;
export declare const elevationShadowStyle: (elevation?: number | Animated.Value) => {
    shadowColor: string;
    shadowOffset: {
        width: Animated.Value;
        height: Animated.AnimatedInterpolation;
    };
    shadowOpacity: Animated.Value;
    shadowRadius: Animated.AnimatedInterpolation;
} | {
    shadowColor?: undefined;
    shadowOffset?: undefined;
    shadowOpacity?: undefined;
    shadowRadius?: undefined;
} | {
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: any;
    };
    shadowOpacity: number;
    shadowRadius: any;
};
