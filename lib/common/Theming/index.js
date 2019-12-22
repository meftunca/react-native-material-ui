import { createTheming } from '@callstack/react-theme-provider';
import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';
import ThemeTypes from './ThemeTypes';
const {
  ThemeProvider,
  withTheme,
  useTheme
} = createTheming(DarkTheme);
export { ThemeProvider, withTheme, useTheme, DarkTheme, LightTheme, ThemeTypes };