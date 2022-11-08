import { Container } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import usePagination from '../../../../utils/usePagination';
import PostHeader from '../../components/PostHeader/PostHeader';
import PostList from '../../components/PostList/PostList';
import PostPagination from '../../components/PostPagination/PostPagination';
import PostToolBar from '../../components/PostToolBar/PostToolBar';
import newsApi from '../../../../api/newsApi';
import { debounce } from 'lodash';

Post.propTypes = {};

function Post(props) {
  const [filter, setFilter] = useState({ keyword: '' });
  const [list, setList] = useState(null);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(1);
  const PER_PAGE = 12;

  const count = Math.ceil(list?.length / PER_PAGE) || 1;
  const _LIST = usePagination(list, PER_PAGE);

  const handleFilterChange = async (value) => {
    const newFilter = { ...filter, ...value };

    const postList = await fetchPost();
    if (!postList) return;

    setList(
      postList.filter((x) => x.title.toLowerCase().includes(newFilter.keyword.toLowerCase().trim()))
    );
    setFilter(newFilter);

    //reset select, pagination
    handleSelectChange(1);
    handlePaginationChange(null, 1);
  };

  const handleSelectChange = (value) => {
    switch (value) {
      case 1:
        setList((pre) =>
          [...pre].sort(
            (a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
          )
        );
        break;
      case 2:
        setList((pre) =>
          [...pre].sort(
            (a, b) => new Date(a.createDate).getTime() - new Date(b.createDate).getTime()
          )
        );
        break;
    }

    setSelected(value);
  };

  const handlePaginationChange = (e, page) => {
    setPage(page);
    _LIST.jump(page);
  };

  useEffect(() => {
    renderPost();
  }, []);

  const renderPost = async () => {
    const postList = await fetchPost();
    if (!postList) return;

    setList(postList);
    handleSelectChange(1);
  };

  const fetchPost = async () => {
    try {
      const { data } = await newsApi.getAll();
      if (!data) return;

      return data;
    } catch (error) {
      console.log('Fail to fetch post');
    }
  };

  return (
    <Container>
      <PostHeader />
      <PostToolBar
        onSearchChange={debounce((value) => {
          handleFilterChange(value);
        }, 300)}
        onSelectChange={handleSelectChange}
        selected={selected}
      />
      <PostList list={_LIST.currentData()} />
      <PostPagination count={count} page={page} onChange={handlePaginationChange} />
    </Container>
  );
}

export default Post;
