import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, Easing} from 'react-native';
import * as Palette from './../../Helpers/palette';
import Icon from '../Core/Icon';
import Color from 'color';
import Ripple from '../Core/Ripple';
const FormControl = ({
  type = 'checkbox',
  color = Palette.blue500,
  size = 16,
  disabled = false,
}: {
  type?: 'checkbox' | 'radio';
  color?: string;
  size?: number;
  disabled?: boolean;
}) => {
  const [selected, setSelected] = useState(false);
  const selectAnimation = useRef(new Animated.Value(selected ? size : 0))
    .current;
  useEffect(() => {
    Animated.timing(selectAnimation, {
      toValue: selected ? size : 0,
      duration: 100,
      easing: Easing.cubic,
    }).start();
  }, [selected]);
  return (
    <View
      style={{
        alignSelf: 'flex-start',
        borderRadius: 30,
        overflow: 'hidden',
        // opacity: disabled ? 0.5 : 1,
      }}>
      <Ripple
        rippleSequential
        rippleColor={disabled ? '#111111' : color}
        onPress={disabled === false ? () => setSelected(!selected) : undefined}
        style={{padding: 10}}>
        <Animated.View
          style={{
            overflow: 'hidden',
            borderRadius: type === 'radio' ? 30 : 2,
            width: size,
            height: size,
            backgroundColor: disabled
              ? Color('#111111')
                  .fade(0.7)
                  .alpha(0.1)
                  .toString()
              : 'transparent',
            borderColor: disabled
              ? Color('#111111')
                  .fade(0.4)
                  .alpha(0.2)
                  .toString()
              : selectAnimation.interpolate({
                  inputRange: [0, 12],
                  outputRange: [
                    '#111111',
                    disabled
                      ? Color(color)
                          .darken(0.8)
                          .fade(0.5)
                          .toString()
                      : color,
                  ],
                }),
            borderWidth: type === 'radio' ? 1.5 : 1.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Animated.View
            style={[
              {
                borderRadius: type === 'radio' ? 30 : 0,
                width: selectAnimation,
                height: selectAnimation,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: disabled
                  ? Color(color)
                      .darken(0.8)
                      .fade(0.8)
                      .toString()
                  : color,
              },
            ]}>
            {type === 'checkbox' && selected && (
              <Icon
                name="check"
                size={size - 4}
                style={{marginTop: 1.5, marginLeft: 1}}
                color={
                  disabled && selected
                    ? Color(color)
                        .darken(0.8)
                        .fade(0.8)
                        .toString()
                    : Color(color).isDark()
                    ? 'white'
                    : 'black'
                }
              />
            )}
          </Animated.View>
        </Animated.View>
      </Ripple>
    </View>
  );
};
export default FormControl;
