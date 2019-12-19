import React, {Component} from 'react';
import {View, Switch as NativeSwitch, Platform} from 'react-native';
// import { colors, Text } from '../..';
// import Color from 'color';
// import withTheme from '../../ThemeProvider/withTheme';

// class Switch extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: this.props.value || false };
//   }
//   render() {
//     let {
//       disabled,
//       secondary,
//       color,
//       label,
//       context,
//       style,
//       ...item
//     } = this.props;
//     let { dark, colors } = context;
//     let activeColor = color
//       ? color
//       : secondary
//       ? colors.accent
//       : colors.primary;
//     const { value } = this.state;
//     activeColor = disabled
//       ? Color('white')
//           .lighten(0.5)
//           .rgb()
//           .toString()
//       : activeColor;
//     const {
//       trackColor = {
//         true: activeColor,
//         false: value
//           ? activeColor
//           : disabled
//           ? dark
//             ? colors.grey800
//             : colors.grey300
//           : Color(colors.black)
//               .fade(0.7)
//               .rgb()
//               .toString(),
//       },
//       ios_backgroundColor = Color(colors.surface).darken(0.1),
//       onStateChange,
//       thumbColor = value == false && !disabled
//         ? dark
//           ? colors.grey50
//           : colors.grey100
//         : Platform.select({ ios: 'white', android: activeColor }),
//       tintColor = value
//         ? activeColor
//         : disabled
//         ? dark
//           ? colors.grey800
//           : colors.grey300
//         : Color(colors.black)
//             .fade(0.7)
//             .rgb()
//             .toString(),
//       ...rest
//     } = item;
//     let defaultProps = {
//       disabled,
//       trackColor,
//       ios_backgroundColor,
//       thumbColor,
//       // tintColor
//     };
//     return (
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           alignSelf: 'flex-start',
//           justifyContent: 'center',
//           paddingHorizontal: 8,
//           paddingVertical: 4,
//           ...style,
//         }}
//         {...rest}
//       >
//         <NativeSwitch
//           disabled={disabled}
//           {...defaultProps}
//           onValueChange={value => {
//             onStateChange && onStateChange(value);
//             this.setState({ value });
//           }}
//           value={value}
//         />
//         {label && <Text>{label}</Text>}
//       </View>
//     );
//   }
// }

// export default withTheme(Switch);
