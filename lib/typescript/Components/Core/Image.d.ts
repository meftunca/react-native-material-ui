import { ImageStyle } from 'react-native';
declare type ImageCustomPropsBase = {
    source: any;
    style?: ImageStyle;
    width?: number;
    ratio?: '1:1' | '4:3' | '1:1.91';
};
declare const Image: ({ style, source }: ImageCustomPropsBase) => JSX.Element;
export default Image;
