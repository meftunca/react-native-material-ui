import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Platform } from 'react-native';

const IconSet = iconName => {
  let icons = {
    material: () => require('react-native-vector-icons/MaterialIcons').default,
    materialCommunity: () => require('react-native-vector-icons/MaterialCommunityIcons').default,
    simpleLine: () => require('react-native-vector-icons/SimpleLineIcons').default,
    fa: () => require('react-native-vector-icons/FontAwesome').default,
    fa5: () => require('react-native-vector-icons/FontAwesome5').default,
    fa5pro: () => require('react-native-vector-icons/FontAwesome5Pro').default,
    foundation: () => require('react-native-vector-icons/Foundation').default,
    evil: () => require('react-native-vector-icons/EvilIcons').default,
    octicons: () => require('react-native-vector-icons/Octicons').default,
    ionic: () => require('react-native-vector-icons/Ionicons').default,
    feather: () => require('react-native-vector-icons/Feather').default,
    entypo: () => require('react-native-vector-icons/Entypo').default,
    zocial: () => require('react-native-vector-icons/Zocial').default
  };
  return icons[iconName]();
};

// const Icon: React.FC<IconProps> = ({
//   family = 'materialCommunity',
//   name,
//   iosOnly,
//   androidOnly,
//   size = 24,
//   color,
//   ...props
// }) => {
//   const IconBase = IconSet(family);
//   return (
//     <IconBase
//       {...props}
//       size={size}
//       color={color}
//       {...Platform.select({
//         ios: {name: iosOnly || name},
//         android: {name: androidOnly || name},
//       })}
//     />
//   );
// };
export default class Icon extends React.PureComponent {
  static propTypes = {
    family: _pt.oneOf(['material', 'materialCommunity', 'simpleLine', 'fa', 'fa5', 'fa5pro', 'foundation', 'evil', 'octicons', 'ionic', 'feather', 'entypo', 'zocial']),
    name: _pt.string,
    iosOnly: _pt.string,
    androidOnly: _pt.string,
    size: _pt.number,
    color: _pt.string
  };

  render() {
    const {
      family = 'materialCommunity',
      name,
      iosOnly,
      androidOnly,
      size = 24,
      color,
      ...props
    } = this.props;
    const IconBase = IconSet(family);
    return React.createElement(IconBase, _extends({}, props, {
      size: size,
      color: color
    }, Platform.select({
      ios: {
        name: iosOnly || name
      },
      android: {
        name: androidOnly || name
      }
    })));
  }

}