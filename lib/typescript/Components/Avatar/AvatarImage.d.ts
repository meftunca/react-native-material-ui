import React from 'react';
import { ImageProps, StyleProp, ViewStyle } from 'react-native';
interface AvatarImageProps extends ImageProps {
    elevation?: number;
    size?: number;
    containerStyle?: StyleProp<ViewStyle>;
    padding?: number;
    color?: string;
    dense?: boolean;
    backgroundColor?: string;
}
declare const AvatarImage: React.FC<AvatarImageProps>;
export default AvatarImage;
