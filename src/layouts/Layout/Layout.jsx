import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SideBarMobile from '../../components/SideBarMobile/SideBarMobile';
import { STORAGE_CONST } from '../../constants/common';
import { logout } from '../../features/Auth/authSlice';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    const action = logout();
    dispatch(action);

    navigate('/home');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header onLogout={handleLogout} />
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
