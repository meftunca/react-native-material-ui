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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from 'color';
import {IconButtonProps} from './Buttons/IconButton';
import Ripple, {RippleProps} from './Core/Ripple';
import {blue500} from 'Helpers/palette';
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
  action?: (props?: IconButtonProps) => JSX.Element;
}
const Chip: React.FC<ChipProps> = ({
  icon,
  label,
  avatarSource,
  variant = 'outlined', //"flat" or "outlined"
  color = '#000',
  selectedIcon = 'check',
  elevation = 2,
  selectedColor = blue500,
  isSelected,
  action,
  ...props
}) => {
  let textColor = isSelected ? selectedColor : color ? color : '#444';
  return (
    <View style={{marginRight: 8, borderRadius: 30, overflow: 'hidden'}}>
      <Ripple
        rippleColor={selectedColor}
        style={[style.container, {marginRight: 0}]}
        {...props}>
        <View
          style={[
            style.root,
            variant === 'outlined'
              ? {...style.outlined, borderColor: textColor}
              : {
                  ...style.flat,
                  backgroundColor: isSelected
                    ? Color(selectedColor)
                        .alpha(0.15)
                        .toString()
                    : Color('white')
                        .darken(0.15)
                        .toString(),
                  elevation,
                },
          ]}>
          {icon ? (
            <Icon
              name={isSelected ? selectedIcon : icon}
              size={18}
              color={textColor}
              style={{marginLeft: 4}}
            />
          ) : avatarSource ? (
            <AvatarImage avatarSource={avatarSource} isSelected={isSelected} />
          ) : null}
          <Text style={style.text} color={textColor} variant="subtitle1">
            {label}
          </Text>
          <View>
            {isSelected === undefined &&
              action &&
              action({
                backgroundColor: Color(textColor).isDark()
                  ? Color(textColor)
                      .alpha(0.6)
                      .toString()
                  : textColor,
                color: Color(textColor).isDark() ? 'white' : '#555',
                size: 14,
              })}
          </View>
        </View>
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
