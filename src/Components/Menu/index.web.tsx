import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Animated,
  Easing,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {useDimensions, useLayout, useAnimation} from '../../Helpers/Hooks';
import {elevationShadowStyle} from '../../Helpers/styleGenerator';
import Ripple from '../Core/Ripple';
import usePortal from '../../Helpers/Hooks/usePortal.web';
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
const Menu: React.FC<MenuProps> = ({
  trigger,
  render = () => null,
  minWidth,
  elevation = 2,
  corderRadius = 4,
  duration = 150,
  delay = 1,
}) => {
  const contentLayout = useLayout();
  const [mounted, isMounted] = useState(false);
  const [size, setSize] = useState({
    oy: 0,
    ox: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const {width, height} = useDimensions().window;
  const {openPortal, closePortal, isOpen, Portal} = usePortal({});

  const triggerRef: any = useRef(null);
  useEffect(() => {
    isMounted(true);
  }, []);
  const fade = useAnimation({
    type: 'timing',
    toValue: isOpen ? 1 : 0,
    duration,
    delay,
    easing:
      isOpen === false
        ? Easing.bezier(0, 0.4, 0.7, 1)
        : Easing.bezier(1, 0.7, 0.4, 0),
  });
  useEffect(() => {
    if (triggerRef.current.measure)
      triggerRef.current.measure(
        (
          ox: number,
          oy: number,
          width: number,
          height: number,
          px: number,
          py: number,
        ) => {
          setSize({...size, ox, oy, x: px, y: py, width, height});
        },
      );
  }, [isOpen]);
  useEffect(() => {
    return () => {
      closePortal();
    };
  }, []);
  useEffect(() => {
    if (isOpen === true) openPortal(true);
    else
      setTimeout(() => {
        closePortal();
      }, duration);
  }, [isOpen]);
  let isTop = contentLayout.height + size.y >= height / 2,
    isLeft = contentLayout.width + size.x >= width,
    top = isTop ? size.y - contentLayout.height - 8 : size.y - 8,
    left = isLeft ? width - contentLayout.width - size.width - 12 : size.x - 12,
    minWidthCalculate =
      size.width < (minWidth || contentLayout.width)
        ? minWidth || contentLayout.width
        : size.width;
  return (
    <>
      {trigger && (
        <Ripple
          {...{
            buttonRef: triggerRef,
            onPress: () => {
              openPortal(true);
            },
          }}>
          {trigger}
        </Ripple>
      )}

      <Portal>
        {mounted && (
          <>
            <TouchableWithoutFeedback
              style={[StyleSheet.absoluteFillObject]}
              onPress={() => closePortal()}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </TouchableWithoutFeedback>
            <View
              pointerEvents={isOpen ? 'auto' : 'none'}
              accessibilityViewIsModal
              accessibilityLiveRegion="polite"
              style={{
                display: isOpen ? 'flex' : 'none',
                position: 'absolute',
                flexDirection: 'row-reverse',
                top,
                left,
                width: contentLayout.width,
                height: contentLayout.height,
              }}>
              <Animated.View
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  alignSelf: 'flex-start',
                  minWidth: minWidthCalculate,
                  minHeight: contentLayout.height || 50,
                }}>
                <Animated.View
                  onLayout={contentLayout.onLayout}
                  collapsable
                  style={{
                    margin: elevation,
                    ...elevationShadowStyle(elevation),
                    backgroundColor: 'white',
                    transform: [
                      {
                        translateX: fade.interpolate({
                          inputRange: [0, 1],
                          outputRange: [
                            (isLeft === false ? -1 : 1) * contentLayout.width +
                              size.width,
                            0,
                          ],
                        }),
                      },
                      {
                        translateY: fade.interpolate({
                          inputRange: [0, 1],
                          outputRange: [
                            (isTop === false ? -1 : 1) * contentLayout.height +
                              size.height,
                            0,
                          ],
                        }),
                      },
                    ],

                    borderRadius: corderRadius,
                  }}>
                  {render({
                    onDismiss: () => {
                      setTimeout(() => {
                        closePortal();
                      }, 200);
                    },
                  })}
                </Animated.View>
              </Animated.View>
            </View>
          </>
        )}
      </Portal>
    </>
  );
};

export default Menu;
