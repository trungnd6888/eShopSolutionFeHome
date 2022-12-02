import React from 'react';
import PropTypes from 'prop-types';
import ProfileOrderTable from './components/ProfileOrderTable/ProfileOrderTable';

ProfileOrder.propTypes = {
  orderList: PropTypes.array,
  onSearchSubmit: PropTypes.func,
};

ProfileOrder.defaultValues = {
  orderList: null,
  onSearchSubmit: null,
};

function ProfileOrder({ orderList, onSearchSubmit }) {
  const handleSearchSubmit = (values) => {
    if (onSearchSubmit) onSearchSubmit(values);
  };

  return <ProfileOrderTable orderList={orderList} onSubmit={handleSearchSubmit} />;
}

export default ProfileOrder;
