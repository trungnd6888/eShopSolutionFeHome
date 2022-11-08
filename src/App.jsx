import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useEffect, useMemo, useState } from 'react';
import Router from '../routes';
import './App.css';
import CartButton from './components/CartButton/CartButton';
import CustomizeSnackbar from './components/CustomizeSnackBar/CustomizeSnackBar';
import SettingButton from './components/SettingButton/SettingButton';
import customTheme from './utils/customTheme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState('light');
  const [totalQuantityCart, setTotalQuantityCart] = useState(0);
  const theme = customTheme(mode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const handleTotalQuantityCart = () => {
    fetchTotalQuantityCart();
  };

  useEffect(() => {
    fetchTotalQuantityCart();
  }, []);

  const fetchTotalQuantityCart = () => {
    const cartList = JSON.parse(localStorage.getItem('cart'));
    if (!cartList) return;

    const totalQuantity = cartList
      .map((x) => x.quantity)
      .reduce((pre, current) => pre + current, 0);

    setTotalQuantityCart(totalQuantity);
  };

  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router onTotalQuantityCart={handleTotalQuantityCart} />
          <SettingButton />
          <CartButton badgeContent={totalQuantityCart} />
          <CustomizeSnackbar />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
export const colorModeContext = ColorModeContext;
