// @ts-nocheck
import React from 'react';
import {Provider, DarkTheme} from '@devloops/react-native-variant';
import {StyleSheet, View} from 'react-native';
// Generate required css

const iconFontStyles = `@font-face {
  src: url(?path=/${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')});
  font-family: MaterialCommunityIcons;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);
const styles = StyleSheet.create({
  root: {
    minHeight: '100%',
    maxWidth: '100%',
    marginHorizontal: 'auto',
  },
});

export default function(renderStory) {
  return (
    <Provider theme={DarkTheme}>
      <View style={styles.root}>{renderStory()}</View>
    </Provider>
  );
}
