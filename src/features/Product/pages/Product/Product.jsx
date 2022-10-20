import { Container } from '@mui/material';
import React, { useState } from 'react';
import usePagination from '../../../../utils/usePagination';
import ProductFilter from '../../components/ProductFilter/ProductFilter';
import ProductHeader from '../../components/ProductHeader/ProductHeader';
import ProductList from '../../components/ProductList/ProductList';
import ProductPagination from '../../components/ProductPagination/ProductPagination';
import ProductToolBar from '../../components/ProductToolBar/ProductToolBar';

Product.propTypes = {};

const initList = [
  {
    id: 1,
    name: 'Đồng hồ Rolex chính hãng 12345',
    price: 1,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 2,
    name: 'Đồng hồ Rolex chính hãng 9999',
    price: 4,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 2,
    brandId: 2,
  },
  {
    id: 3,
    name: 'Đồng hồ Rolex chính hãng 12345',
    price: 5,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 3,
    brandId: 3,
  },
  {
    id: 4,
    name: 'Đồng hồ Rolex chính hãng',
    price: 3,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 4,
  },
  {
    id: 5,
    name: 'Đồng hồ Rolex chính hãng 12345',
    price: 4,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 6,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 2,
    brandId: 2,
  },
  {
    id: 7,
    name: 'Đồng hồ Rolex chính hãng',
    price: 3,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 3,
    brandId: 3,
  },
  {
    id: 8,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 4,
  },
  {
    id: 9,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 10,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 2,
    brandId: 1,
  },
  {
    id: 11,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 3,
    brandId: 1,
  },
  {
    id: 12,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 13,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 14,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 2,
    brandId: 1,
  },
  {
    id: 15,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 3,
    brandId: 1,
  },
  {
    id: 16,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 17,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 18,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 2,
    brandId: 1,
  },
  {
    id: 19,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 3,
    brandId: 1,
  },
  {
    id: 20,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 21,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 22,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 23,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 24,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 25,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 26,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 27,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 28,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 29,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 30,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 31,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 32,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 33,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 34,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 35,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 36,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 37,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 38,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 39,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 40,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 41,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 42,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 43,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 44,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 45,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 46,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 47,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 48,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 49,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 50,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 51,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 52,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 53,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 54,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 55,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 56,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 57,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 58,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 59,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 60,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 61,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 62,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 63,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 64,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 65,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 66,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 67,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 68,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 69,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 70,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 71,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 72,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 73,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 74,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 75,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 76,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 77,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 78,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 79,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 80,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 81,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 82,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 83,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 84,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 85,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 86,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 87,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 88,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 89,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 90,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 91,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 92,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 93,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 94,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 95,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 96,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 97,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 98,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 99,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 100,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 101,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 102,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 103,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 104,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 105,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 106,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
  {
    id: 107,
    name: 'Đồng hồ Rolex chính hãng',
    price: 1000000,
    src: '../src/images/Rolex01.jpg',
    desc: 'Automatic',
    categoryId: 1,
    brandId: 1,
  },
];

function Product(props) {
  const [filter, setFilter] = useState({ keyword: '', radio: 0, checkbox: [] });
  const [list, setList] = useState(initList);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const PER_PAGE = 12;

  const count = Math.ceil(list.length / PER_PAGE) || 1;
  const _LIST = usePagination(list, PER_PAGE);

  const handleFilterChange = (value) => {
    const newFilter = { ...filter, ...value };

    let newList = initList;

    //search
    if (newFilter.keyword !== '') {
      newList = newList.filter((x) =>
        x.name.toLocaleLowerCase().includes(newFilter.keyword.toLocaleLowerCase().trim())
      );
    }

    //category
    switch (Number(newFilter.radio)) {
      case 0:
        break;
      default:
        newList = newList.filter((x) => x.categoryId === Number(newFilter.radio));
    }

    //brand new
    if (newFilter.checkbox.length > 0)
      newList = newList.filter((x) => newFilter.checkbox.includes(x.brandId));

    setList(newList);
    setFilter(newFilter);

    //reset select, pagination
    handleSelectChange(1);
    handlePaginationChange(null, 1);
  };

  const handleSelectChange = (value) => {
    switch (value) {
      case 1:
        setList((pre) => [...pre].sort((a, b) => a.price - b.price));
        break;
      case 2:
        setList((pre) => [...pre].sort((a, b) => b.price - a.price));
        break;
    }

    setSelected(value);
  };

  const handleCloseFilter = () => {
    setOpenDrawer(false);
  };

  const handleOpenFilter = () => {
    setOpenDrawer(true);
  };

  const handlePaginationChange = (e, page) => {
    setPage(page);
    _LIST.jump(page);
  };

  const handleDefault = () => {
    setFilter({ keyword: '', radio: 0, checkbox: [] });

    handleFilterChange({ keyword: '', radio: 0, checkbox: [] });
  };

  return (
    <Container>
      <ProductHeader />
      <ProductToolBar
        onSearchChange={handleFilterChange}
        onSelectChange={handleSelectChange}
        onOpenFilter={handleOpenFilter}
        selected={selected}
      />
      <ProductList list={_LIST.currentData()} />
      <ProductPagination count={count} page={page} onChange={handlePaginationChange} />
      <ProductFilter
        checkBoxValue={filter.checkbox}
        radioValue={Number(filter.radio)}
        openDrawer={openDrawer}
        onCloseFilter={handleCloseFilter}
        onRadioChange={handleFilterChange}
        onCheckBoxChange={handleFilterChange}
        onDefault={handleDefault}
      />
    </Container>
  );
}

export default Product;
