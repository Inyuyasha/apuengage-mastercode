/**
 * Below are the colors that are used in the app. The colors are defined for both light and dark modes.
 * These colors help ensure consistency and thematic coherence throughout the app's user interface.
 * 
 * For further customization, consider exploring other styling libraries such as:
 * - [Nativewind](https://www.nativewind.dev/) for utility-first CSS in JS styling in React Native.
 * - [Tamagui](https://tamagui.dev/) for optimizing design systems across web and native.
 * - [unistyles](https://reactnativeunistyles.vercel.app) for unifying styles across platforms.
 *
 * The 'tintColorLight' and 'tintColorDark' variables are set to adjust the icon and text colors based on the selected theme.
 */

const tintColorLight = '#0a7ea4'; // Light mode tint color for icons and highlights
const tintColorDark = '#fff'; // Dark mode tint color for icons and highlights

export const Colors = {
  light: {
    text: '#11181C', // Default text color in light mode
    background: '#fff', // Background color for light mode
    tint: tintColorLight, // Tint color used for elements that require emphasis in light mode
    icon: '#687076', // Icon color in light mode
    tabIconDefault: '#687076', // Default tab icon color in light mode
    tabIconSelected: tintColorLight, // Tab icon color when selected in light mode
  },
  dark: {
    text: '#ECEDEE', // Default text color in dark mode
    background: '#151718', // Background color for dark mode
    tint: tintColorDark, // Tint color used for elements that require emphasis in dark mode
    icon: '#9BA1A6', // Icon color in dark mode
    tabIconDefault: '#9BA1A6', // Default tab icon color in dark mode
    tabIconSelected: tintColorDark, // Tab icon color when selected in dark mode
  },
};
