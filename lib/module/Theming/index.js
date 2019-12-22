import { createTheming } from '@callstack/react-theme-provider';
import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';
const { ThemeProvider, withTheme, useTheme } = createTheming(DarkTheme);
export { ThemeProvider, withTheme, useTheme, DarkTheme, LightTheme };
