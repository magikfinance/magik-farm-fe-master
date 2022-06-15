import { createTheme } from '@material-ui/core/styles';

const createThemeMode = isNightMode =>
  createTheme({
    palette: {
      type: isNightMode ? 'dark' : 'light',
      background: {
        default: isNightMode ? '#242332' : '#fbf9f6',
        paper: isNightMode ? '#606077' : '#fff',
        primary: isNightMode ? '#505067' : '#FBF6F0',
        secondary: isNightMode ? '#3B3A4D' : '#F8F2EC',
        extra: isNightMode ? '#242332' : '#FBF6F0',
        dark: isNightMode ? '#2B2A3D' : '#999',
        paused: isNightMode ? 'rgba(35, 38, 69, 0.71)' : '#232645',
        retired: isNightMode ? '#d32f2f' : '#e57373',
        hover: isNightMode ? '#2B2A3D' : '#EFE6DC',
        border: isNightMode ? '#2B2A3D' : '#DED9D5',
        overlay: isNightMode ? 'rgba(0, 0, 0, 0.75)' : 'rgba(255, 255, 255, 0.75)',
      },
      primary: {
        main: isNightMode ? '#fff' : '#000',
      },
      secondary: {
        main: isNightMode ? '#fff' : '#F8F2EC',
      },
      text: {
        primary: isNightMode ? '#fff' : '#000',
        secondary: isNightMode ? '#B0B0DD' : '#00000066',
      },
    },
    fonts: {
      highlight: '"Bebas Neue", sans-serif',
      text: "'Open Sans', sans-serif",
    },
    shadow: {
      card: '0 6px 15px rgba(0, 0, 0, 0.25);',
    },
    overrides: {
      MuiButton: {
        label: {
          color: isNightMode ? '#fff' : '#000',
        },
      },
      // for dropdown menu items
      MuiButtonBase: {
        root: {
          color: isNightMode ? '#fff' : '#000',
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          color: isNightMode ? '#fff' : '#000',
        },
        colorSecondary: {
          color: isNightMode ? '#fff' : '#000',
        },
      },
    },
  });

export default createThemeMode;
