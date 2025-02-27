import React from 'react';
import {SafeAreaView as SafeAreaViews} from 'react-native-safe-area-context';
import {StyleSheet, StyleProp, ViewStyle, Platform, View} from 'react-native';
import Surface from '../Core/Surface';
import Text from '../Core/Typography';
import {useTheme} from '../../Theming';
import Button from '../Buttons/Button';
import Color from 'color';
import {useAnimation} from '../../Helpers/Hooks';
const SafeAreaView = Platform.OS === 'web' ? View : SafeAreaViews;
type ActionType = {
  color?: string;
  label?: string;
  accessibilityLabel?: string;
  onPress?: () => void;
};
type SnackbarType = {
  label: string;
  color?: string;
  //   avatar?:AvatarType;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  elevation?: number;
  action?: ActionType | undefined;
  isOpen?: boolean;
  onDismiss?: () => void;
};
const Snackbar: React.FC<SnackbarType> = ({
  style,
  label,
  color,
  backgroundColor,
  elevation,
  isOpen,
  action,
  onDismiss,
}) => {
  const {roundness, dark, color: colors} = useTheme();
  const opacity = useAnimation({
    type: 'timing',
    toValue: isOpen ? 1 : 0,
    initialValue: 0,
    duration: 200,
    delay: 0,
  });
  React.useEffect(() => {
    if (isOpen === true) {
      setTimeout(onDismiss, 3000);
    }
  }, [isOpen]);
  return (
    <SafeAreaView pointerEvents="box-none" style={styles.wrapper}>
      <Surface
        pointerEvents="box-none"
        accessibilityLiveRegion="polite"
        alignContent="center"
        alignItems="center"
        direction="row"
        margin={8}
        cornerRaidus={roundness}
        style={
          [
            {
              minHeight: 48,
              opacity: opacity,
              elevation,
              alignSelf: Platform.OS === 'web' ? 'center' : 'auto',
              transform: [
                {
                  scale: opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.7, 1],
                  }),
                },
              ],
              minWidth: Platform.OS === 'web' ? 300 : '100%',
              backgroundColor:
                backgroundColor || Color(colors.text).isDark()
                  ? Color(colors.text)
                      .lighten(0.7)
                      .toString()
                  : Color(colors.text)
                      .darken(0.8)
                      .toString(),
            },

            style,
          ] as StyleProp<ViewStyle>
        }>
        <Text
          style={[
            styles.content,
            {
              marginRight: action ? 0 : 16,
              color: color || dark ? colors.text : colors.surface,
            },
          ]}>
          {label}
        </Text>
        {action ? (
          <Button
            accessibilityLabel={action.accessibilityLabel}
            onPress={() => {
              action.onPress();
              onDismiss();
            }}
            containerStyle={{padding: 0}}
            style={styles.button}
            color={colors.primary}
            variant="text">
            {action.label}
          </Button>
        ) : null}
      </Surface>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  content: {
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 16,
    flexWrap: 'wrap',
    // flex: 1,
  },
  button: {
    margin: 6,
  },
});
export default Snackbar;
