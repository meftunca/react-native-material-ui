import React from 'react';
import {
  View,
  PixelRatio,
  ViewProps,
  StyleProp,
  ImageStyle,
  StatusBar,
} from 'react-native';
import Surface, {SurfaceProps} from '../Core/Surface';
import Text, {TextProps} from '../Core/Typography';
import BackDropModal from '../Core/BackDropModal';
const roundPixel: number = PixelRatio.roundToNearestPixel(1);
const DefaultSurface: SurfaceProps = {
  direction: 'column',
  justify: 'flex-start',
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  padding: [8, 16],
  margin: 0,
};

interface HeaderProps extends SurfaceProps {
  left?: React.FC<{size?: number; style?: StyleProp<ImageStyle>}>;
  right?: React.FC<{size?: number; style?: StyleProp<ImageStyle>}>;
  title?: JSX.Element | string;
  subtitle?: JSX.Element | string;
  titleProps?: TextProps;
  subtitleProps?: TextProps;
  fullScreen?: boolean;
}
const Header: React.FC<HeaderProps> = ({
  children,
  left,
  right,
  title,
  fullScreen,
  subtitle,
  titleProps,
  subtitleProps,
  ...otherProps
}) => {
  return (
    <Surface
      {...DefaultSurface}
      padding={[16, 8, 8, fullScreen ? 16 : 24]}
      margin={4}
      direction="row"
      alignItems="center"
      {...otherProps}>
      {left ? left({style: {margin: 4}, size: 48}) : <></>}
      <View
        style={{
          flex: 1,
          marginHorizontal: left ? 8 : 0,
          justifyContent: 'center',
        }}>
        {title && (
          <>
            {typeof title === 'string' ? (
              <Text
                transform="capitalize"
                variant="h6"
                gutterBottom={2}
                contrast={0.87}
                {...titleProps}>
                {title}
              </Text>
            ) : (
              title
            )}
          </>
        )}
        {subtitle && (
          <>
            {typeof subtitle === 'string' ? (
              <Text
                transform="capitalize"
                variant="subtitle2"
                contrast={0.6}
                {...subtitleProps}>
                {subtitle}
              </Text>
            ) : (
              subtitle
            )}
          </>
        )}
      </View>
      {right ? right({}) : <></>}
    </Surface>
  );
};
const Content: React.FC<SurfaceProps & {fullScreen?: boolean}> = ({
  children,
  fullScreen,
  ...otherProps
}) => (
  <Surface
    {...DefaultSurface}
    margin={[8, 8, 8, fullScreen ? 16 : 24]}
    style={{flex: 1}}
    {...otherProps}>
    {children}
  </Surface>
);
const Actions: React.FC<ViewProps> = ({children, style, ...otherProps}) => (
  <View
    style={[
      {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 8 / roundPixel,
      },
      style,
    ]}
    {...otherProps}>
    {children &&
      React.Children.map(children, Child => {
        return React.isValidElement(Child)
          ? React.cloneElement(Child, {
              transform: 'uppercase',
              textProps: {weight: '500', contrast: 1},
            })
          : Child;
      })}
  </View>
);
interface WrapProps {
  Header: React.FC<HeaderProps>;
  Content: React.FC<SurfaceProps>;
  Actions: React.FC<SurfaceProps>;
}
interface DialogProps extends SurfaceProps {
  visible?: boolean;
  backdropColor?: string;
  onClose?: () => void | undefined;
  fullScreen?: boolean;
  animationType?: 'fade' | 'slide' | 'none';
  duration?: number;
  delay?: number;
}
Header.displayName = 'Header';
Content.displayName = 'Content';
Actions.displayName = 'Actions';
const Dialog: React.FC<DialogProps> & WrapProps = ({
  children,
  visible,
  animationType,
  fullScreen = false,
  backdropColor = 'rgba(0,0,0,.55)',
  onClose,
  duration = 300,
  delay,
  ...otherProps
}) => {
  return (
    <BackDropModal
      visible={visible}
      fullScreen={fullScreen}
      onClose={onClose}
      duration={duration}
      delay={delay}
      backdropColor={backdropColor}
      animationType={fullScreen ? 'slide' : animationType}>
      {fullScreen && (
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      )}
      <Surface
        direction="column"
        padding={0}
        margin={0}
        alignItems="flex-start"
        elevation={0}
        style={[
          {minHeight: 110, justifyContent: 'space-between'},
          fullScreen && {height: '100%'},
        ]}
        {...otherProps}>
        {children &&
          React.Children.map(children, (Child, index) => {
            return React.isValidElement(Child)
              ? React.cloneElement(Child, {fullScreen})
              : Child;
          })}
      </Surface>
    </BackDropModal>
  );
};
Dialog.Header = Header;
Dialog.Content = Content;
Dialog.Actions = Actions;
export default Dialog;
