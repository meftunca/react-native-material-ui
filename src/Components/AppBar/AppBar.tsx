import React from 'react';
import {View, StyleSheet, ViewProps, Platform, Animated} from 'react-native';
import Action from './Action';
import Content, {AppBarContentProps} from './Content';
import Color from 'color';
import {elevationShadowStyle} from '../../Helpers/styleGenerator';
import {IconButtonProps} from '../Buttons/IconButton';
import SafeAreaView from 'react-native-safe-area-view';
import {ThemeTypes, useTheme} from '../../Theming';
const AnimatedSafeAreaView =
  Platform.OS === 'web'
    ? Animated.View
    : Animated.createAnimatedComponent(SafeAreaView);
interface AppBarProps extends ViewProps {
  varint?: 'top' | 'bottom';
  subChildren?: any | React.ReactNode;
  subChildrenProps?: any;
  color?: string;
  elevation?: number;
  theme?: ThemeTypes;
}
interface CompoundProps {
  Content: React.FC<AppBarContentProps>;
  Grow: React.FC;
  Action: React.FC<IconButtonProps>;
}
const AppBar: React.FC<AppBarProps> & CompoundProps = ({
  varint,
  children,
  subChildren,
  subChildrenProps,
  color,
  elevation = 2,
  theme,
}) => {
  theme = useTheme(theme);
  color = color || theme.color.primary;
  // color = color
  //   ? color
  //   : secondary
  //   ? context.colors.primary
  //   : context.colors.primary;
  const childrens = React.Children.map(children, (child: any) => {
    return React.cloneElement(child, {
      color: Color(color).isDark() ? 'white' : '#333',
    });
  });
  const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      minHeight: 56,
      backgroundColor: color,
      margin: 0,
    },
    root: {
      justifyContent: 'flex-start',
    },
  });
  return (
    <AnimatedSafeAreaView style={[style.root, elevationShadowStyle(elevation)]}>
      <Animated.View style={[style.container]}>{childrens}</Animated.View>
      {subChildren && varint === 'top' && (
        <View
          style={[
            {
              backgroundColor: color,
              minHeight: 100,
              justifyContent: 'center',
              paddingLeft: 60,
            },
          ]}>
          <View style={{marginLeft: 24, marginRight: 16}} {...subChildrenProps}>
            {subChildren()}
          </View>
        </View>
      )}
    </AnimatedSafeAreaView>
  );
};

const Grow: React.FC = () => <View style={{flexGrow: 1}} />;

Grow.displayName = 'Grow';
AppBar.Grow = Grow;
AppBar.Content = Content;
AppBar.Action = Action;

// AppBar.displayName = Grow;
// AppBar.displayName = Content;
// AppBar.displayName = Action;

export default AppBar;
