import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import MailIcon from '@mui/icons-material/Mail';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import TouchAppIcon from '@mui/icons-material/TouchApp';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Divider from '@mui/material/Divider';
import FeedIcon from '@mui/icons-material/Feed';
import PublicIcon from '@mui/icons-material/Public';
import WatchIcon from '@mui/icons-material/Watch';
import HomeIcon from '@mui/icons-material/Home';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STORAGE_CONST } from '../../constants/common';
import { openDrawer } from '../../layouts/drawerSlice';

import { NavLink } from 'react-router-dom';
// import { Collapse } from '@mui/material';
// import StarBorder from '@mui/icons-material/StarBorder';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';

SideBar.propTypes = {};

const openedMixin = (theme) => ({
  width: STORAGE_CONST.DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: STORAGE_CONST.DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

const activeStyle = {
  textDecoration: 'underline',
};

export default function SideBar(props) {
  // const [openMenu, setOpenMenu] = React.useState(false);
  const theme = useTheme();
  const drawer = useSelector((state) => state.drawer);
  const dispatch = useDispatch();

  // const handleClick = () => {
  //   if (!drawer) return;

  //   setOpenMenu(!openMenu);
  // };

  const handleDrawerClose = () => {
    const action = openDrawer(false);
    dispatch(action);
    // setOpenMenu(false);
  };
  return (
    <Drawer variant="permanent" open={drawer} sx={{ display: { xs: 'none', md: 'block' } }}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {[
          { name: 'Trang chủ', icon: <HomeIcon />, url: 'home' },
          { name: 'Giới thiệu', icon: <PublicIcon />, url: 'aboutUs' },
          { name: 'Đồng hồ', icon: <WatchIcon />, url: 'product' },
          { name: 'Bài viết', icon: <FeedIcon />, url: 'post' },
          { name: 'Liên hệ', icon: <ContactPageIcon />, url: 'contact' },
        ].map((item, index) => (
          <ListItem
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            key={item.name + index}
            component={NavLink}
            to={item.url}
            disablePadding
            sx={{ display: 'block', color: 'inherit' }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: drawer ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: drawer ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} sx={{ opacity: drawer ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: drawer ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={handleClick}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: drawer ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: drawer ? 1 : 0 }} />
              {drawer && (openMenu ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            <Collapse in={openMenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </ListItem>
        ))}
      </List> */}
    </Drawer>
  );
}
