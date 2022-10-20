import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useMemo, useState } from 'react';
import Router from '../routes';
import './App.css';
import CartButton from './components/CartButton/CartButton';
import SettingButton from './components/SettingButton/SettingButton';
import customTheme from './utils/customTheme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState('light');
  const theme = customTheme(mode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
          <SettingButton />
          <CartButton />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
export const colorModeContext = ColorModeContext;
