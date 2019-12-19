import { ScreenRect } from 'react-native';
export default function useKeyboard(): {
    keyboardShown: boolean;
    coordinates: {
        start: ScreenRect;
        end: ScreenRect;
    };
};
