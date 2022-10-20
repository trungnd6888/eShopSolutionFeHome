import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';

const customTheme = (mode) =>
  useMemo(
    () =>
      createTheme({
        palette: { mode },
        components: {
          MuiSpeedDial: {
            styleOverrides: {
              fab: {
                width: 35,
                height: 35,
              },
            },
          },
          MuiSpeedDialAction: {
            styleOverrides: {
              fab: {
                width: 35,
                height: 35,
              },
            },
          },
        },
      }),
    [mode]
  );

export default customTheme;
