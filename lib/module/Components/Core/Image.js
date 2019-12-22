import React, { useState, useEffect } from 'react';
import { Image as ImageComp, Animated, View, } from 'react-native';
import { useAnimation } from '../../Helpers/Hooks';
const Image = ({ imageStyle, ratio, source, ...props }) => {
    const animation = useAnimation({
        type: 'spring',
        toValue: 0,
        initialValue: 0,
    });
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });
    const _onLayout = event => {
        let containerWidth = event.nativeEvent.layout.width;
        if (ratio) {
            setSize({
                ...size,
                width: containerWidth,
                height: containerWidth * ratio,
            });
        }
        else if (typeof source === 'number') {
            let sourceSize = ImageComp.resolveAssetSource(source);
            setSize({
                ...size,
                width: containerWidth,
                height: (containerWidth * sourceSize.height) / sourceSize.width,
            });
        }
        else if (typeof source === 'object') {
            ImageComp.getSize(source.uri, (width, height) => {
                console.log('width,height', width, height);
                setSize({
                    ...size,
                    width: containerWidth,
                    height: (containerWidth * height) / width,
                });
            }, (...params) => {
                console.log('params', params);
            });
        }
        animation.setValue(1);
    };
    useEffect(() => { }, []);
    return (React.createElement(View, { onLayout: _onLayout, style: {
            width: '100%',
        } },
        React.createElement(Animated.Image, Object.assign({ source: source, style: [imageStyle, size, { opacity: animation }] }, props))));
};
export default Image;
