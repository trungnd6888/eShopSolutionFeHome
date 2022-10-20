import LightModeIcon from '@mui/icons-material/LightMode';
import TuneIcon from '@mui/icons-material/Tune';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import * as React from 'react';
import { colorModeContext } from '../../App';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { useTheme } from '@mui/material/styles';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

export default function SettingButton() {
  const colorMode = React.useContext(colorModeContext);

  const actions = [
    {
      icon: <SettingsBrightnessIcon />,
      name: 'Sáng/Tối',
      event: colorMode.toggleColorMode,
    },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'fixed', top: '50vh', right: 0 }}
      icon={<TuneIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.event}
        />
      ))}
    </SpeedDial>
  );
}
