import React, {useRef, useEffect, useState} from 'react';
import Text from './Core/Typography';
import {
  StyleSheet,
  View,
  ImageBackground,
  ImageSourcePropType,
  Animated,
  Easing,
} from 'react-native';
import Color from 'color';
import {IconButtonProps} from './Buttons/IconButton';
import Ripple, {RippleProps} from './Core/Ripple';
import Icon from './Core/Icon';
import {useAnimation} from '../Helpers/Hooks';
import {ThemeTypes, useTheme} from '../Theming';
const AnimatedBaseIcon = Animated.createAnimatedComponent(Icon);
interface ChipProps extends RippleProps {
  avatarSource?: ImageSourcePropType;
  icon?: string;
  label?: string;
  variant?: 'flat' | 'outlined';
  color?: string;
  selectedColor?: string;
  selectedIcon?: string;
  elevation?: number;
  isSelected?: boolean;
  onSelect?: (status: boolean) => void | undefined;
  action?: (props?: IconButtonProps) => JSX.Element;
  theme?: ThemeTypes;
}
const Chip: React.FC<ChipProps> = ({
  icon,
  label,
  avatarSource,
  variant = 'outlined', //"flat" or "outlined"
  color,
  selectedIcon = 'check',
  elevation = 2,
  selectedColor,
  isSelected,
  onSelect,
  action,
  theme,
  ...props
}) => {
  theme = useTheme(theme);
  color = color || theme.color.primary;
  selectedColor = color || theme.color.primary;
  const animated = useAnimation({
    type: 'timing',
    toValue: isSelected === undefined && icon ? 20 : isSelected ? 20 : 1,
    initialValue: 0,
    easing: Easing.linear,
    duration: 200,
  });
  let textColor = color && isSelected ? color : theme.color.text,
    activeBG = Color(selectedColor)
      .alpha(0.15)
      .toString(),
    bg = Color('white')
      .darken(0.15)
      .toString(),
    colorAnimate =
      isSelected === undefined
        ? textColor
        : animated.interpolate({
            inputRange: [0, 20],
            outputRange: [textColor, selectedColor],
          });
  return (
    <View style={{marginRight: 8, borderRadius: 30, overflow: 'hidden'}}>
      <Ripple
        rippleColor={selectedColor}
        style={[style.container, {marginRight: 0}]}
        onPress={onSelect ? () => onSelect(!isSelected) : undefined}
        {...props}>
        <Animated.View
          style={[
            style.root,
            variant === 'outlined'
              ? {...style.outlined, borderColor: colorAnimate}
              : {
                  ...style.flat,
                  backgroundColor:
                    isSelected === undefined
                      ? bg
                      : animated.interpolate({
                          inputRange: [0, 20],
                          outputRange: [bg, activeBG],
                        }),
                  elevation,
                },
          ]}>
          {icon || selectedIcon ? (
            <AnimatedIcon
              name={selectedIcon || icon}
              size={animated}
              color={colorAnimate}
              style={{
                marginLeft: animated.interpolate({
                  inputRange: [0, 20],
                  outputRange: [0, 4],
                }),
              }}
            />
          ) : avatarSource ? (
            <AvatarImage avatarSource={avatarSource} isSelected={isSelected} />
          ) : null}
          <Text
            style={{...style.text}}
            color={colorAnimate.toString()}
            animated
            variant="subtitle1">
            {label}
          </Text>
          {isSelected === undefined &&
            action &&
            action({
              role: 'chip',
              onPress: () => {
                alert('test');
              },
              backgroundColor: Color(textColor).isDark()
                ? Color(textColor)
                    .alpha(0.6)
                    .toString()
                : textColor,
              color: Color(textColor).isDark() ? 'white' : '#555',
              rippleStyle: {marginRight: 4},
              size: 14,
            })}
        </Animated.View>
      </Ripple>
    </View>
  );
};
const AvatarImage = ({
  avatarSource,
  isSelected,
}: {
  avatarSource?: any;
  isSelected?: boolean;
}) => {
  const [isLoad, setIsLoad] = useState(false);
  const translate = useRef(new Animated.Value(-30)).current;
  const selected = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (isLoad)
      Animated.timing(translate, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
      }).start();
  }, [isLoad]);
  useEffect(() => {
    Animated.timing(selected, {
      toValue: 0,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }, [isSelected]);
  return (
    <Animated.View
      style={[
        isLoad
          ? style.thumbnailWrapper
          : {width: 0, height: 0, overflow: 'hidden'},
        {
          transform: [{translateX: translate}],
        },
      ]}>
      <ImageBackground
        onLoadEnd={() => setIsLoad(true)}
        source={avatarSource}
        style={style.thumbnail}>
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: 'rgba(0,0,0,.24)',
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{translateX: translate}],
            },
          ]}>
          <Icon
            name="check"
            color="white"
            size={20}
            style={{marginTop: 4, marginLeft: 4}}
          />
        </Animated.View>
      </ImageBackground>
    </Animated.View>
  );
};

const AnimatedIcon = ({name, color, ...props}) => {
  return <AnimatedBaseIcon name={name} color={color} {...props} />;
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 8,
    borderRadius: 30,
  },
  root: {
    flexDirection: 'row',
    // paddingVertical: 2,
    borderRadius: 50,
    padding: 4,
    alignContent: 'center',
    alignItems: 'center',
    minHeight: 32,
  },
  outlined: {
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: '#777',
  },
  action: {
    marginVertical: 0,
    marginHorizontal: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  flat: {
    borderWidth: 0,
    borderColor: 'transparent',
  },
  thumbnailWrapper: {
    marginRight: 0,
    borderRadius: 24,
  },
  thumbnail: {
    overflow: 'hidden',
    margin: 4,
    marginRight: 0,
    width: 24,
    borderRadius: 24,
    height: 24,
  },
  text: {
    marginHorizontal: 8,
    marginBottom: 2,
  },
});

export default Chip;
