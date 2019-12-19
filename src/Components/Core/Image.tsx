import React, {useState, useEffect} from 'react';

import {
  Image as ImageComp,
  Animated,
  View,
  ImageStyle,
  StyleProp,
  ViewStyle,
  ImagePropsBase,
} from 'react-native';
import {useAnimation} from 'Helpers/Hooks';

type ImageCustomPropsBase = ImagePropsBase & {
  imageStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  width?: number;
  ratio?: number;
};
const Image: React.FC<ImageCustomPropsBase> = ({
  imageStyle,
  ratio,
  source,
  ...props
}) => {
  const animation = useAnimation({
    type: 'spring',
    toValue: 0,
    initialValue: 0,
  });
  const [size, setSize] = useState<{width: number; height: number}>({
    width: 0,
    height: 0,
  });

  const _onLayout = event => {
    let containerWidth = event.nativeEvent.layout.width;
    console.log('containerWidth', event.nativeEvent.layout);
    if (ratio) {
      setSize({
        ...size,
        width: containerWidth,
        height: containerWidth * ratio,
      });
    } else if (typeof source === 'number') {
      let sourceSize = ImageComp.resolveAssetSource(source);

      setSize({
        ...size,
        width: containerWidth,
        height: (containerWidth * sourceSize.height) / sourceSize.width,
      });
    } else if (typeof source === 'object') {
      ImageComp.getSize(
        source.uri,
        (width, height) => {
          console.log('width,height', width, height);
          setSize({
            ...size,
            width: containerWidth,
            height: (containerWidth * height) / width,
          });
        },
        (...params) => {
          console.log('params', params);
        },
      );
    }
    animation.setValue(1);
  };
  useEffect(() => {
    // Dimensions.addEventListener('change', widthListener);
    // return () => Dimensions.removeEventListener('change', widthListener);
  }, []);

  return (
    <View
      onLayout={_onLayout}
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: 'black',
      }}>
      <Animated.Image
        source={source}
        style={[imageStyle, size, {opacity: animation}]}
        {...props}
      />
    </View>
  );
};

export default Image;
