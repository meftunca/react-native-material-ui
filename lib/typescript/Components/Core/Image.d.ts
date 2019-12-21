import React from 'react';
import { ImageStyle, StyleProp, ViewStyle, ImagePropsBase } from 'react-native';
declare type ImageCustomPropsBase = ImagePropsBase & {
    imageStyle?: StyleProp<ImageStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    width?: number;
    ratio?: number;
    source?: {
        uri?: string;
    };
};
declare const Image: React.FC<ImageCustomPropsBase>;
export default Image;
