import React, {useState} from 'react';
import {View, Animated} from 'react-native';
import ListItem, {ListItemProps} from './ListItem';
import Collapse from '../Core/Collapse';
import {useAnimation} from '../../Helpers/Hooks';
import Ripple from '../Core/Ripple';
import IconBase from '../Core/Icon';
const Icon = Animated.createAnimatedComponent(IconBase);
const ListAccordion: React.FC<ListItemProps & {
  expanded?: boolean;
  children?: React.ReactNode;
  duration?: number;
  delay?: number;
  startDeg?: string;
  endDeg?: string;
}> = ({
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
    useNativeDriver: true,
  });
  const animatedIcon = ({...props}) => (
    <Ripple
      {...props}
      style={{...props.style, marginTop: 12, marginRight: 8}}
      rippleContainerBorderRadius={30}>
      <Icon
        name="chevron-up"
        size={24}
        color="black"
        style={{
          marginRight: 16,
          transform: [
            {
              rotate: rotate.interpolate({
                inputRange: [0, 1],
                outputRange: [startDeg, endDeg],
              }),
            },
          ],
        }}
      />
    </Ripple>
  );
  return (
    <>
      <ListItem
        right={animatedIcon}
        {...otherProps}
        onPress={() => setOpen(!open)}
      />
      <Collapse duration={duration} delay={delay} expanded={expanded || open}>
        <View
          style={{
            paddingLeft:
              otherProps.left && otherProps.type === 'avatar' ? 64 : 16,
          }}>
          {children}
        </View>
      </Collapse>
    </>
  );
};
ListAccordion.displayName = 'List.Accordion';
export default ListAccordion;
