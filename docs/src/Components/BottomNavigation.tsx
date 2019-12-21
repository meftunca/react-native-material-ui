import React, {Fragment, useState, useEffect, useRef, Ref} from 'react';
import {Animated, UIManager, Easing, StyleSheet, View} from 'react-native';
import Icon from './Core/Icon';
import * as Palette from './../Helpers/palette';
import Ripple from './Core/Ripple';
import Text from './Core/Typography';
import {Transitioning, Transition} from 'react-native-reanimated';
import SafeAreaView from 'react-native-safe-area-view';
import {useTheme, ThemeTypes} from 'Theming';
import Color from 'color';
interface BottomNavigationProps {
  config?: {
    initialScene?: string;
    labelHidden?: boolean;
    labelDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    color?: string;
  };
  actions?: Array<{
    label?: string;
    icon?: string;
    color?: string;
    sceneKey?: string;
  }>;
  scenes?: Array<{key?: string; Scene?: React.ReactNode}>;
  onChangeScene?: (params: {sceneKey?: string}) => void | null;
  color?: string;
  secondary?: boolean;
  top?: any;
  theme?: ThemeTypes;
}
const transition = (
  <Transition.Sequence>
    <Transition.Out type="fade" interpolation="easeInOut" durationMs={200} />
    <Transition.In type="fade" interpolation="easeInOut" durationMs={200} />
  </Transition.Sequence>
);
const BottomNavigation: React.FC<BottomNavigationProps> = ({
  config = {},
  actions = [],
  scenes = [],
  color,
  secondary,
  onChangeScene = () => {},
  theme,
}) => {
  theme = useTheme(theme);
  const ref: Ref<any> = useRef(null);
  const [state, setState] = useState(0);
  const [ActiveSceneKey, setActiveSceneKey] = useState<any>(
    config.initialScene || actions[0].sceneKey,
  );
  color = color ? color : secondary ? theme.color.accent : theme.color.primary;
  const handleChange = (key: string) => {
    onChangeScene({sceneKey: key});
    ref.current.animateNextTransition();
    setState(state + 1);
    setActiveSceneKey(key);
  };
  return (
    <View style={{flex: 1}}>
      <Transitioning.View
        ref={ref}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          padding: 24,
        }}
        transition={transition}>
        {scenes.map(
          ({key, Scene}: {key?: string; Scene?: any}, k: any) =>
            key === ActiveSceneKey && <Scene key={k} />,
        )}
      </Transitioning.View>
      <SafeAreaView
        style={[
          styles.paper,
          {
            backgroundColor: color,
          },
        ]}>
        <>
          {actions.map((i: any, k: number) => (
            <View style={styles.content} key={k}>
              <ActionButton
                {...i}
                index={k}
                handleChange={handleChange}
                active={ActiveSceneKey === i.sceneKey}
                color={Color(color).isDark() ? 'white' : theme.color.primary}
                {...config}
              />
            </View>
          ))}
        </>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  paper: {
    minHeight: 70,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexGrow: 1,
    alignContent: 'stretch',
    flexDirection: 'column',
  },
  action: {
    minWidth: 80,
    maxWidth: 168,
    marginTop: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {fontSize: 14, fontWeight: '600', textAlign: 'center'},
});
export default BottomNavigation;

interface ActionButtonProps {
  label?: string;
  icon?: string;
  color?: string;
  sceneKey?: string;
  labelHidden?: boolean;
  labelDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  index?: number;
  // handleChange?: (index: number) => void | null;
  handleChange?: any;
  iconSize?: number;
  active?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
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
    Animated.parallel([
      Animated.timing(scale, {
        toValue: active ? 1 : 0.9,
        duration: 200,
        easing: Easing.linear,
      }),
      Animated.timing(fontScale, {
        toValue: active ? 15 : 1,
        duration: 200,
        easing: Easing.linear,
      }),
      Animated.timing(opacity, {
        toValue: active ? 1 : 0.81,
        duration: 200,
        easing: Easing.linear,
      }),
    ]).start();
  }, [active]);

  return (
    <Ripple
      onPress={() => handleChange(sceneKey)}
      {...rest}
      rippleCentered={true}
      rippleColor={color}>
      <Animated.View
        style={[
          styles.action,
          {transform: [{scale}], opacity, flexDirection: labelDirection},
        ]}>
        {icon && (
          <Icon
            color={color}
            size={iconSize}
            style={{marginBottom: 4}}
            name={icon}
          />
        )}
        {label === undefined ? (
          <Fragment />
        ) : labelHidden === false ? (
          <Text style={[styles.text, {color}]} transform="capitalize">
            {label}
          </Text>
        ) : labelHidden === true ? (
          <Animated.Text
            style={[
              styles.text,
              {
                color,
                fontSize: fontScale,
                textTransform: 'capitalize',
              },
            ]}>
            {label}
          </Animated.Text>
        ) : (
          <Fragment />
        )}
      </Animated.View>
    </Ripple>
  );
};
