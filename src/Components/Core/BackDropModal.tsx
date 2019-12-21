import React, {useEffect, useState} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Animated,
  Easing,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useAnimation, useDimensions} from '../../Helpers/Hooks';
const SafeAreaViewAnimated = Animated.createAnimatedComponent(SafeAreaView);
interface BackDropModalProps {
  visible?: boolean;
  fullScreen?: boolean;
  backdropColor?: string;
  duration?: number;
  delay?: number;
  animationType?: 'fade' | 'slide' | 'none';
  onClose?: () => void | undefined;
  children?: React.ReactNode;
}

const BackDropModal: React.FC<BackDropModalProps> = ({
  onClose,
  children,
  animationType,
  duration = 400,
  delay,
  visible = false,
  fullScreen = false,
  backdropColor = 'transparent',
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(visible);
  const windowHeight = useDimensions().window.height;
  const animation = useAnimation({
    type: 'timing',
    toValue: visible ? 1 : 0,
    initialValue: visible ? 1 : 0,
    easing: Easing.ease,
    duration,
    delay,
  });
  useEffect(() => {
    return () => onClose && onClose();
  }, []);

  useEffect(() => {
    if (visible === true) setModalVisible(true);
    else if (backdropColor === 'transparent') setModalVisible(visible);
    else
      setTimeout(() => {
        setModalVisible(visible);
      }, 1200);
  }, [visible]);
  return (
    <Modal
      transparent
      supportedOrientations={[
        'landscape',
        'landscape-left',
        'landscape-right',
        'portrait',
        'portrait-upside-down',
      ]}
      animated={false}
      hardwareAccelerated={true}
      animationType="none"
      visible={modalVisible}
      onDismiss={onClose}
      onRequestClose={onClose}>
      <Animated.View
        pointerEvents={visible ? 'auto' : 'none'}
        accessibilityViewIsModal
        accessibilityLiveRegion="polite"
        style={[StyleSheet.absoluteFill]}>
        <TouchableWithoutFeedback style={{zIndex: 0}} onPress={onClose}>
          <Animated.View
            style={{
              flex: 1,
              backgroundColor:
                animationType === 'slide' ? 'transparent' : backdropColor,
              opacity: animation,
            }}
          />
        </TouchableWithoutFeedback>
        <SafeAreaViewAnimated
          forceInset={{top: 'always', bottom: 'always'}}
          style={[
            fullScreen === true && {
              backgroundColor: 'white',
            },
            {
              ...StyleSheet.absoluteFillObject,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              flexGrow: 1,
              flexShrink: 1,
              // backgroundColor: 'red',
              zIndex: 999,
            },
            fullScreen && {flex: 1, height: '100%'},
            animationType === 'slide'
              ? {
                  top: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [windowHeight, 0],
                  }),
                }
              : animationType === 'fade'
              ? {
                  opacity: animation,
                }
              : {},
          ]}
          pointerEvents="box-none">
          <KeyboardAvoidingView
            behavior="height"
            style={[
              {
                width: fullScreen ? '100%' : '80%',
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignSelf: 'center',
              },
            ]}>
            {children}
          </KeyboardAvoidingView>
        </SafeAreaViewAnimated>
      </Animated.View>
    </Modal>
  );
};

export default BackDropModal;
