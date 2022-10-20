// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import StarBorder from '@mui/icons-material/StarBorder';
// import { Collapse } from '@mui/material';
// import Divider from '@mui/material/Divider';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import FeedIcon from '@mui/icons-material/Feed';
import PublicIcon from '@mui/icons-material/Public';
import WatchIcon from '@mui/icons-material/Watch';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { openDrawer } from '../../layouts/drawerSlice';

export default function SideBarMobile() {
  // const [openMenu, setOpenMenu] = React.useState(false);
  const drawer = useSelector((state) => state.drawer);
  const dispatch = useDispatch();

  const handleCloseSideBar = () => {
    const action = openDrawer(false);
    dispatch(action);
  };

  // const handleClick = () => {
  //   setOpenMenu(!openMenu);
  // };

  const activeStyle = {
    textDecoration: 'underline',
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onKeyDown={handleCloseSideBar}>
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
    </Box>
  );

  const [screenWidth, setScreenWidth] = React.useState(getScreenWidth());

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function handleWindowResize() {
    setScreenWidth(getScreenWidth());
  }

  function getScreenWidth() {
    const { innerWidth } = window;
    return innerWidth;
  }

  return (
    <Drawer
      open={screenWidth < 900 ? drawer : false}
      onClose={handleCloseSideBar}
      sx={{ display: { xs: 'block', md: 'none' } }}
    >
      {list()}
    </Drawer>
  );
}
