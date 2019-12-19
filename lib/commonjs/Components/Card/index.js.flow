import React from 'react';
import {
  View,
  PixelRatio,
  ViewProps,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import Surface, {SurfaceProps} from './../Core/Surface';
import Text, {TextProps} from './../Core/Typography';
const roundPixel: number = PixelRatio.roundToNearestPixel(1);
const DefaultSurface: SurfaceProps = {
  direction: 'column',
  justify: 'flex-start',
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  padding: 16 / roundPixel,
  margin: 0,
  theme: {paper: {backgroundColor: 'transparent'}},
};

interface HeaderProps extends SurfaceProps {
  left?: React.FC<{size?: number; style?: StyleProp<ImageStyle>}>;
  right?: React.FC<{size?: number; style?: StyleProp<ImageStyle>}>;
  title?: JSX.Element | string;
  subtitle?: JSX.Element | string;
  titleProps?: TextProps;
  subtitleProps?: TextProps;
}
const Header: React.FC<HeaderProps> = ({
  children,
  left,
  right,
  title,
  subtitle,
  titleProps,
  subtitleProps,
  ...otherProps
}) => {
  return (
    <Surface
      {...DefaultSurface}
      padding={[12, 16]}
      direction="row"
      alignItems="center"
      {...otherProps}>
      {left !== undefined ? left({style: {marginRight: 16}, size: 40}) : <></>}
      <View
        style={{
          flex: 1,
          marginLeft: left ? 16 : 0,
          justifyContent: 'center',
        }}>
        {title && (
          <>
            {typeof title === 'string' ? (
              <Text
                transform="capitalize"
                variant="h6"
                contrast={0.7}
                gutterBottom={4}
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
                contrast={0.5}
                {...subtitleProps}>
                {subtitle}
              </Text>
            ) : (
              subtitle
            )}
          </>
        )}
      </View>
      {right !== undefined ? right({}) : <></>}
    </Surface>
  );
};
const Content: React.FC<SurfaceProps> = ({children, ...otherProps}) => (
  <Surface {...DefaultSurface} {...otherProps}>
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
    {children}
  </View>
);
interface WrapProps extends SurfaceProps {
  Header: React.FC<HeaderProps>;
  Content: React.FC<SurfaceProps>;
  Actions: React.FC<SurfaceProps>;
}
Header.displayName = 'Header';
Content.displayName = 'Content';
Actions.displayName = 'Actions';
const Card: React.FC<SurfaceProps> & WrapProps = ({
  children,
  ...otherProps
}) => {
  return (
    <Surface
      theme={{paper: {backgroundColor: 'white'}}}
      direction="column"
      padding={0}
      margin={0}
      alignItems="flex-start"
      {...otherProps}>
      {/* {children} */}
      {children &&
        React.Children.map(children, (Child, index) => {
          return React.isValidElement(Child)
            ? React.cloneElement(Child, {index})
            : Child;
        })}
    </Surface>
  );
};
Card.Header = Header;
Card.Content = Content;
Card.Actions = Actions;
export default Card;
