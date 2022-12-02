import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STORAGE_CONST, STORAGE_USER } from '../../constants/common';
import { openDrawer } from '../../layouts/drawerSlice';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import KeyIcon from '@mui/icons-material/Key';
import { PropTypes } from 'prop-types';

Header.propTypes = {
  onLogout: PropTypes.func,
};

Header.defaultValues = {
  onLogout: null,
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header({ onLogout }) {
  const drawer = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const initValue = location.pathname === '/search' ? searchParams.get('q') : '';
  const user = useSelector((state) => state.auth).current;

  const getCheckLogin = (user) => {
    if (!user) return { isLogin: false, roleList: [] };

    let isExpired = false;
    let isLogin = false;
    let roleList = [];

    const dateNow = new Date();
    if (user.exp * 1000 < dateNow.getTime()) isExpired = true;

    isLogin = !isExpired;
    roleList = user[STORAGE_USER.ROLE] || [];

    return { isLogin: !isExpired, roleList: user[STORAGE_USER.ROLE] || [] };
  };

  const { isLogin, roleList } = getCheckLogin(user);

  const [loginAnchorEl, setLoginAnchorEl] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isLoginMenuOpen = Boolean(loginAnchorEl);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleLogout = () => {
    if (onLogout) onLogout();
    handleMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLoginMenuOpen = (event) => {
    setLoginAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLoginMenuClose = () => {
    setLoginAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const loginMenuId = 'primary-login-account-menu';
  const renderLoginMenu = (
    <Menu
      anchorEl={loginAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={loginMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isLoginMenuOpen}
      onClose={handleLoginMenuClose}
    >
      <MenuItem component={Link} to="/login" onClick={handleLoginMenuClose}>
        Đăng nhập
      </MenuItem>
      <MenuItem component={Link} to="/register" onClick={handleLoginMenuClose}>
        Đăng ký
      </MenuItem>
    </Menu>
  );

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
        Thông tin
      </MenuItem>
      <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const handleDrawerOpen = () => {
    const action = openDrawer(true);
    dispatch(action);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      navigate(`/search?q=${e.target.value}`);
    }
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        open={drawer}
        sx={(theme) => ({
          zIndex: { md: theme.zIndex.drawer + 1 },
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(drawer && {
            marginLeft: STORAGE_CONST.DRAWER_WIDTH,
            width: { xs: '100%', md: `calc(100% - ${STORAGE_CONST.DRAWER_WIDTH}px)` },
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),
        })}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{
                mr: 2,
                ...(drawer && { display: { md: 'none' } }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color="inherit"
              component={Link}
              to="/home"
              variant="h6"
              noWrap
              sx={{ textDecoration: 'none', display: { xs: 'none', sm: 'block' } }}
            >
              E-WATCH
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Tìm kiếm…"
                inputProps={{ 'aria-label': 'search' }}
                onKeyDown={handleKeyDown}
                defaultValue={initValue}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
          </Box>
          {isLogin ? (
            <>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </>
          ) : (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-controls={loginMenuId}
              aria-haspopup="true"
              onClick={handleLoginMenuOpen}
            >
              <KeyIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      {renderLoginMenu}
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
