import React, {useState, useRef, Ref} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import ScaledImage from './ScaledImage';
import PaginationItem from './PaginationItem';
import {blue500} from '../../Helpers/palette';
import Ripple from '../Core/Ripple';
import {useDimensions} from '../../Helpers/Hooks';
const Carousel = ({imgData}: {imgData?: any}) => {
  const {width} = useDimensions().window;
  const [active, setState] = useState(0);
  const _scroller: Ref<{_component?: any}> = useRef(null);
  const to = (active: number) => {
    setState(active);
    console.log(' _scroller.current ', _scroller.current);
    // _scroller.current &&
    _scroller.current?._component.scrollResponderScrollTo({
      x: Dimensions.get('window').width * active,
      y: 0,
      duration: 400,
      animated: true,
    });
  };
  return (
    <View>
      <Animated.ScrollView
        ref={_scroller}
        horizontal={true}
        alwaysBounceVertical={false}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        disableScrollViewPanResponder={true}
        pagingEnabled={true}
        scrollEnabled={true}
        onMomentumScrollEnd={({nativeEvent}: {nativeEvent: any}) => {
          let index: number = Number(
            Number(nativeEvent.contentOffset.x / width).toFixed(0),
          );
          setState(index);
        }}
        contentContainerStyle={{
          width: width * imgData.length,
          flexDirection: 'row',
          padding: 0,
        }}>
        {imgData.map((i: any, k: number) => (
          <ScaledImage {...i} key={k} />
        ))}
      </Animated.ScrollView>
      <View style={style.paginationWrapper}>
        {new Array(imgData.length).fill('').map((i, k) => (
          <Ripple onPress={() => to(k)} key={i || k}>
            <PaginationItem color={blue500} active={active == k} />
          </Ripple>
        ))}
      </View>
    </View>
  );
};

export const style = StyleSheet.create({
  paginationWrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -20,
  },
});

export default Carousel;
