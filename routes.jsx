import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useRoutes } from 'react-router-dom';
import NotFound from './src/components/NotFound/NotFound';
import NotRole from './src/components/NotRole/pages/NotRole/NotRole';
import AboutUs from './src/features/AboutUs/pages/AboutUs/AboutUs';
import ForgotPassword from './src/features/Auth/components/ForgotPassword/ForgotPassword';
import Login from './src/features/Auth/components/Login/Login';
import Register from './src/features/Auth/components/Register/Register';
import RegisterSuccess from './src/features/Auth/components/RegisterSuccess/RegisterSuccess';
import ResetPassword from './src/features/Auth/components/ResetPassword/ResetPassword';
import ResetPasswordSuccess from './src/features/Auth/components/ResetPasswordSuccess/ResetPasswordSuccess';
import Cart from './src/features/Cart/Cart';
import Contact from './src/features/Contact/pages/Contact/Contact';
import Home from './src/features/Home/pages/Home/Home';
import PaymentSuccess from './src/features/Payment/components/PaymentSuccess/PaymentSuccess';
import Payment from './src/features/Payment/Payment';
import Post from './src/features/Post/pages/Post/Post';
import PostDetail from './src/features/Post/pages/PostDetail/PostDetail';
import Product from './src/features/Product/pages/Product/Product';
import ProductDetail from './src/features/Product/pages/ProductDetail/ProductDetail';
import Profile from './src/features/Profile/pages/Profile/Profile';
import Search from './src/features/Search/pages/Search/Search';
import Layout from './src/layouts/Layout/Layout';

Router.propTypes = {
  onTotalQuantityCart: PropTypes.func,
};

Router.defaultValues = {
  onTotalQuantityCart: null,
};

function Router({ onTotalQuantityCart }) {
  const user = useSelector((state) => state.auth).current;

  const getCheckLogin = (user) => {
    if (!user) return false;

    let isExpired = false;
    let isLogin = false;

    const dateNow = new Date();
    if (user.exp * 1000 < dateNow.getTime()) isExpired = true;

    isLogin = !isExpired;

    return isLogin;
  };
  const isLogin = getCheckLogin(user);

  const isRoleClaim = (claimType, claimValue) => {
    return user[claimType]?.includes(claimValue);
  };

  const handleTotalQuantityCart = () => {
    if (onTotalQuantityCart) onTotalQuantityCart();
  };

  return useRoutes([
    {
      path: '/',
      element: <Navigate to="home" />,
    },
    {
      path: '/',
      element: <Layout />,

      //Outlet
      children: [
        {
          path: 'profile',
          element: isLogin && isRoleClaim('profile', 'profile.view') ? <Profile /> : <NotRole />,
        },
        { path: 'search', element: <Search /> },
        { path: 'contact', element: <Contact /> },
        { path: 'aboutUs', element: <AboutUs /> },
        { path: 'home', element: <Home onTotalQuantityCart={handleTotalQuantityCart} /> },
        {
          path: 'product',
          children: [
            {
              index: true,
              element: <Product onTotalQuantityCart={handleTotalQuantityCart} />,
            },
            {
              path: ':id',
              element: <ProductDetail onTotalQuantityCart={handleTotalQuantityCart} />,
            },
          ],
        },
        {
          path: 'cart',
          children: [
            {
              index: true,
              element: <Cart onTotalQuantityCart={handleTotalQuantityCart} />,
            },
            {
              path: 'payment',
              children: [
                {
                  index: true,
                  element: <Payment onTotalQuantityCart={handleTotalQuantityCart} />,
                },
                {
                  path: 'paymentsuccess',
                  element: <PaymentSuccess />,
                },
              ],
            },
          ],
        },
        {
          path: 'post',
          children: [
            {
              index: true,
              element: <Post />,
            },
            {
              path: ':id',
              element: <PostDetail />,
            },
          ],
        },
      ],
    },
    { path: 'login', element: <Login /> },
    {
      path: 'register',
      children: [
        {
          index: true,
          element: <Register />,
        },
        {
          path: 'success',
          element: <RegisterSuccess />,
        },
      ],
    },
    {
      path: 'forgotpassword',
      children: [
        {
          index: true,
          element: <ForgotPassword />,
        },
        {
          path: 'reset',
          children: [
            {
              index: true,
              element: <ResetPassword />,
            },
            {
              path: 'success',
              element: <ResetPasswordSuccess />,
            },
          ],
        },
      ],
    },
    {
      path: '404',
      element: <NotFound />,
    },
    {
      path: '*',
      element: <Navigate to="404" />,
    },
  ]);
}

export default Router;
