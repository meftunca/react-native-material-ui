import React, {useEffect, useState} from 'react';
import {View, Animated, StyleSheet, Easing} from 'react-native';
import {useAnimation, useLayout} from 'Helpers/Hooks';
import Text, {TextProps} from './../Core/Typography';
import Button, {ButtonProps} from 'Components/Buttons/Button';
import {elevationShadowStyle} from 'Helpers/styleGenerator';

type actionsProps = ButtonProps & {
  label: string;
};
interface BannerProps {
  visible?: boolean;
  actions?: actionsProps | actionsProps[];
  contentText?: string;
  contentTextProps?: TextProps;
  duration?: number;
  delay?: number;
}

const BannerWrapper: React.FC<BannerProps> = ({
  visible,
  actions,
  contentTextProps,
  contentText,
  duration = 300,
  delay = 0,
}) => {
  const {onLayout, height} = useLayout();
  const [mount, setMount] = useState(false);
  const animatedValue = useAnimation({
    type: 'timing',
    initialValue: 0,
    toValue: visible ? 1 : 0,
    easing: visible
      ? Easing.bezier(0.2, 0.45, 0.78, 1)
      : Easing.bezier(1, 0.65, 0.3, 0.1),
    duration,
    delay,
    // useNativeDriver: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setMount(true);
    }, duration);
  }, []);

  const translateEffect: any =
      mount === false
        ? -height || -400
        : animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-height, 0],
          }),
    marginBottom: any = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 10],
    });

  return (
    <View style={{overflow: 'hidden'}}>
      <Animated.View
        onLayout={onLayout}
        style={[
          styles.wrapper,
          {
            marginTop: translateEffect,
            backgroundColor: 'white',
            marginBottom,
            ...elevationShadowStyle(visible ? 2 : 0),
          },
        ]}>
        <View style={styles.textContent}>
          <View style={{maxWidth: '95%'}}>
            <Text variant="body2" {...contentTextProps}>
              {contentText}
            </Text>
          </View>
          {!Array.isArray(actions) && (
            <Button style={styles.actions} {...actions}>
              {actions?.label}
            </Button>
          )}
        </View>
        {Array.isArray(actions) && (
          <View style={styles.actionsContainer}>
            {actions?.map(({label, style, ...otherProps}, key: number) => (
              <Button style={[styles.actions, style]} {...otherProps} key={key}>
                {label}
              </Button>
            ))}
          </View>
        )}
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: 16,
    paddingBottom: 8,
    elevation: 2,
    minHeight: 54,
    flexGrow: 1,
  },
  textContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    // marginBottom: 12,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actions: {
    marginLeft: 8,
  },
});
export default BannerWrapper;
