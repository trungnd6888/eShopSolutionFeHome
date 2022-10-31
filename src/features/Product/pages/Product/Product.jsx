import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import usePagination from '../../../../utils/usePagination';
import ProductFilter from '../../components/ProductFilter/ProductFilter';
import ProductHeader from '../../components/ProductHeader/ProductHeader';
import ProductList from '../../components/ProductList/ProductList';
import ProductPagination from '../../components/ProductPagination/ProductPagination';
import ProductToolBar from '../../components/ProductToolBar/ProductToolBar';
import productApi from '../../../../api/productApi';

Product.propTypes = {};

function Product(props) {
  const [filter, setFilter] = useState({ keyword: '', radio: 0, checkbox: [] });
  const [list, setList] = useState(null);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const PER_PAGE = 12;

  const count = Math.ceil(list?.length / PER_PAGE) || 1;
  const _LIST = usePagination(list, PER_PAGE);

  const handleFilterChange = async (value) => {
    const newFilter = { ...filter, ...value };

    let productList = await fetchProduct();

    //search
    if (newFilter.keyword !== '') {
      productList = productList.filter((x) =>
        x.name.toLocaleLowerCase().includes(newFilter.keyword.toLocaleLowerCase().trim())
      );
    }

    //category
    if (Number(newFilter.radio) > 0) {
      productList = productList.filter((x) =>
        x.categories.map((y) => y.id).includes(Number(newFilter.radio))
      );
    }

    //brand new
    if (newFilter.checkbox.length > 0)
      productList = productList.filter((x) => newFilter.checkbox.includes(x.brandId));

    setList(productList);
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
      case 3:
        setList((pre) =>
          [...pre].sort(
            (a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
          )
        );
        break;
      case 4:
        setList((pre) =>
          [...pre].sort(
            (a, b) => new Date(a.createDate).getTime() - new Date(b.createDate).getTime()
          )
        );
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

  useEffect(() => {
    renderProduct();
  }, []);

  const renderProduct = async () => {
    const productList = await fetchProduct();
    setList(productList);

    handleSelectChange(1);
  };

  const fetchProduct = async () => {
    try {
      const { data } = await productApi.getAll();
      return data;
    } catch (error) {
      console.log('Fail to fetch product api');
    }
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
