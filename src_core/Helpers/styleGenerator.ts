import {Animated} from 'react-native';
import {black as SHADOW_COLOR} from './palette';
const SHADOW_OPACITY = 0.24;
const directionFullList: string[] = ['Top', 'Right', 'Bottom', 'Left'];
const directionSimpleList: string[] = ['Vertical', 'Horizontal'];
export const directionRepeat = (
  prefix: 'padding' | 'margin' | 'border',
  list: Array<number> | Array<string>,
) => {
  let repeatObject: any = {},
    directionType = list.length === 2 ? directionSimpleList : directionFullList;
  for (let i = 0; i < list.length; i++) {
    repeatObject[prefix + directionType[i]] = list[i];
  }
  return repeatObject;
};
export const elevationShadowStyle = (
  elevation: number | Animated.Value = 0,
) => {
  if (elevation instanceof Animated.Value) {
    const inputRange = [0, 1, 2, 3, 8, 24];

    return {
      shadowColor: SHADOW_COLOR,
      shadowOffset: {
        width: new Animated.Value(0),
        height: elevation.interpolate({
          inputRange,
          outputRange: [0, 0.5, 0.75, 2, 7, 23],
        }),
      },
      shadowOpacity: new Animated.Value(SHADOW_OPACITY),
      shadowRadius: elevation.interpolate({
        inputRange,
        outputRange: [0, 0.75, 1.5, 3, 8, 24],
      }),
    };
  } else {
    if (elevation === 0) {
      return {};
    }

    let height, radius;
    switch (elevation) {
      case 1:
        height = 0.5;
        radius = 0.75;
        break;
      case 2:
        height = 0.75;
        radius = 1.5;
        break;
      default:
        height = elevation - 1;
        radius = elevation;
    }

    return {
      shadowColor: SHADOW_COLOR,
      shadowOffset: {
        width: 0,
        height: height + elevation / 16,
      },
      shadowOpacity: SHADOW_OPACITY + elevation / 40,
      shadowRadius: radius,
    };
  }
};
