import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useRoutes } from 'react-router-dom';
import Home from './src/features/Home/pages/Home/Home';
import Product from './src/features/Product/pages/Product/Product';
import Layout from './src/layouts/Layout/Layout';
import ProductDetail from './src/features/Product/pages/ProductDetail/ProductDetail';
import Cart from './src/features/Cart/Cart';
import Payment from './src/features/Payment/Payment';
import Post from './src/features/Post/pages/Post/Post';
import PostDetail from './src/features/Post/pages/PostDetail/PostDetail';
import NotFound from './src/components/NotFound/NotFound';
import AboutUs from './src/features/AboutUs/pages/AboutUs/AboutUs';
import Contact from './src/features/Contact/pages/Contact/Contact';
import Search from './src/features/Search/pages/Search/Search';
import Profile from './src/features/Profile/pages/Profile/Profile';
import Login from './src/features/Auth/components/Login/Login';
import Register from './src/features/Auth/components/Register/Register';
import PaymentSuccess from './src/features/Payment/components/PaymentSuccess/PaymentSuccess';
import ForgotPassword from './src/features/Auth/components/ForgotPassword/ForgotPassword';
import RegisterSuccess from './src/features/Auth/components/RegisterSuccess/RegisterSuccess';
import ResetPassword from './src/features/Auth/components/ResetPassword/ResetPassword';
import ResetPasswordSuccess from './src/features/Auth/components/ResetPasswordSuccess/ResetPasswordSuccess';

Router.propTypes = {
  onTotalQuantityCart: PropTypes.func,
};

Router.defaultValues = {
  onTotalQuantityCart: null,
};

function Router({ onTotalQuantityCart }) {
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
        { path: 'profile', element: <Profile /> },
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
