import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SideBarMobile from '../../components/SideBarMobile/SideBarMobile';
import { STORAGE_CONST } from '../../constants/common';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <SideBar />
      <SideBarMobile />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 3,
          width: { xs: '100%', sm: `calc(100% - ${STORAGE_CONST.DRAWER_WIDTH}px)` },
        }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
