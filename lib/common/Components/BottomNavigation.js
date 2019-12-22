import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import Icon from './Core/Icon';
import Ripple from './Core/Ripple';
import Text from './Core/Typography';
import { Transitioning, Transition } from 'react-native-reanimated';
import SafeAreaView from 'react-native-safe-area-view';
import { useTheme } from '../Theming';
import Color from 'color';
const transition = React.createElement(Transition.Sequence, null, React.createElement(Transition.Out, {
  type: "fade",
  interpolation: "easeInOut",
  durationMs: 200
}), React.createElement(Transition.In, {
  type: "fade",
  interpolation: "easeInOut",
  durationMs: 200
}));

const BottomNavigation = ({
  config = {},
  actions = [],
  scenes = [],
  color,
  secondary,
  onChangeScene = () => {},
  theme
}) => {
  theme = useTheme(theme);
  const ref = useRef(null);
  const [state, setState] = useState(0);
  const [ActiveSceneKey, setActiveSceneKey] = useState(config.initialScene || actions[0].sceneKey);
  color = color ? color : secondary ? theme.color.accent : theme.color.primary;

  const handleChange = key => {
    onChangeScene({
      sceneKey: key
    });
    ref.current.animateNextTransition();
    setState(state + 1);
    setActiveSceneKey(key);
  };

  return React.createElement(View, {
    style: {
      flex: 1
    }
  }, React.createElement(Transitioning.View, {
    ref: ref,
    style: {
      flex: 1,
      width: '100%',
      height: '100%',
      padding: 24
    },
    transition: transition
  }, scenes.map(({
    key,
    Scene
  }, k) => key === ActiveSceneKey && React.createElement(Scene, {
    key: k
  }))), React.createElement(SafeAreaView, {
    style: [styles.paper, {
      backgroundColor: color
    }]
  }, React.createElement(React.Fragment, null, actions.map((i, k) => React.createElement(View, {
    style: styles.content,
    key: k
  }, React.createElement(ActionButton, _extends({}, i, {
    index: k,
    handleChange: handleChange,
    active: ActiveSceneKey === i.sceneKey,
    color: Color(color).isDark() ? 'white' : theme.color.primary
  }, config)))))));
};

BottomNavigation.propTypes = {
  config: _pt.shape({
    initialScene: _pt.string,
    labelHidden: _pt.bool,
    labelDirection: _pt.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
    color: _pt.string
  }),
  actions: _pt.any,
  scenes: _pt.any,
  onChangeScene: _pt.func,
  color: _pt.string,
  secondary: _pt.bool,
  top: _pt.any,
  theme: _pt.any
};
const styles = StyleSheet.create({
  paper: {
    minHeight: 70,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    flexGrow: 1,
    alignContent: 'stretch',
    flexDirection: 'column'
  },
  action: {
    minWidth: 80,
    maxWidth: 168,
    marginTop: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center'
  }
});
export default BottomNavigation;

const ActionButton = ({
  label = '',
  icon = 'send',
  color = 'white',
  labelHidden = false,
  index = 0,
  handleChange,
  sceneKey,
  iconSize = 24,
  labelDirection = 'column',
  active = 0,
  ...rest
}) => {
  const [scale] = useState(new Animated.Value(active ? 1 : 0.8));
  const [fontScale] = useState(new Animated.Value(active ? 15 : 0));
  const opacity = useRef(new Animated.Value(active ? 1 : 0.5)).current;
  useEffect(() => {
    Animated.parallel([Animated.timing(scale, {
      toValue: active ? 1 : 0.9,
      duration: 200,
      easing: Easing.linear
    }), Animated.timing(fontScale, {
      toValue: active ? 15 : 1,
      duration: 200,
      easing: Easing.linear
    }), Animated.timing(opacity, {
      toValue: active ? 1 : 0.81,
      duration: 200,
      easing: Easing.linear
    })]).start();
  }, [active]);
  return React.createElement(Ripple, _extends({
    onPress: () => handleChange(sceneKey)
  }, rest, {
    rippleCentered: true,
    rippleColor: color
  }), React.createElement(Animated.View, {
    style: [styles.action, {
      transform: [{
        scale
      }],
      opacity,
      flexDirection: labelDirection
    }]
  }, icon && React.createElement(Icon, {
    color: color,
    size: iconSize,
    style: {
      marginBottom: 4
    },
    name: icon
  }), label === undefined ? React.createElement(Fragment, null) : labelHidden === false ? React.createElement(Text, {
    style: [styles.text, {
      color
    }],
    transform: "capitalize"
  }, label) : labelHidden === true ? React.createElement(Animated.Text, {
    style: [styles.text, {
      color,
      fontSize: fontScale,
      textTransform: 'capitalize'
    }]
  }, label) : React.createElement(Fragment, null)));
};

ActionButton.propTypes = {
  label: _pt.string,
  icon: _pt.string,
  color: _pt.string,
  sceneKey: _pt.string,
  labelHidden: _pt.bool,
  labelDirection: _pt.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  index: _pt.number,
  handleChange: _pt.any,
  iconSize: _pt.number,
  active: _pt.string
};