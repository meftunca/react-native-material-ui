// @ts-nocheck
import React from 'react';
import {ThemeProvider, DarkTheme} from '@devloops/react-native-variant';
import {StyleSheet, View} from 'react-native';

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
console.log('iconFont :', iconFont);
const iconFontStyles = `@font-face {
  src: url(?path=/${iconFont});
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
    <ThemeProvider theme={DarkTheme}>
      <View style={styles.root}>{renderStory()}</View>
    </ThemeProvider>
  );
}
