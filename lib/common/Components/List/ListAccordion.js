function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import { View, Animated } from 'react-native';
import ListItem from './ListItem';
import Collapse from '../Core/Collapse';
import { useAnimation } from '../../Helpers/Hooks';
import Ripple from '../Core/Ripple';
import IconBase from '../Core/Icon';
const Icon = Animated.createAnimatedComponent(IconBase);

const ListAccordion = ({
  expanded,
  children,
  duration = 250,
  endDeg = '180deg',
  startDeg = '0deg',
  delay,
  ...otherProps
}) => {
  const [open, setOpen] = useState(false);
  const rotate = useAnimation({
    type: 'timing',
    toValue: expanded || open ? 1 : 0,
    initialValue: 0,
    duration,
    delay,
    useNativeDriver: true
  });

  const animatedIcon = ({ ...props
  }) => React.createElement(Ripple, _extends({}, props, {
    style: { ...props.style,
      marginTop: 12,
      marginRight: 8
    },
    rippleContainerBorderRadius: 30
  }), React.createElement(Icon, {
    name: "chevron-up",
    size: 24,
    color: "black",
    style: {
      marginRight: 16,
      transform: [{
        rotate: rotate.interpolate({
          inputRange: [0, 1],
          outputRange: [startDeg, endDeg]
        })
      }]
    }
  }));

  return React.createElement(React.Fragment, null, React.createElement(ListItem, _extends({
    right: animatedIcon
  }, otherProps, {
    onPress: () => setOpen(!open)
  })), React.createElement(Collapse, {
    duration: duration,
    delay: delay,
    expanded: expanded || open
  }, React.createElement(View, {
    style: {
      paddingLeft: otherProps.left && otherProps.type === 'avatar' ? 64 : 16
    }
  }, children)));
};

ListAccordion.displayName = 'List.Accordion';
export default ListAccordion;