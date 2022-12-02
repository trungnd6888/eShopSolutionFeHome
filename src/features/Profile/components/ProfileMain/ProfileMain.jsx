import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProfileSecurity from './components/ProfileSecurity/ProfileSecurity';
import ProfileOrder from './components/ProfileOrder/ProfileOrder';
import ProfileForm from './components/ProfileForm/ProfileForm';
import { useDispatch, useSelector } from 'react-redux';
import { STORAGE_USER } from '../../../../constants/common';
import userApi from '../../../../api/userApi';
import { useState } from 'react';
import { open } from '../../../../features/Auth/snackBarSlice';
import orderApi from '../../../../api/orderApi';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProfileMain() {
  const [value, setValue] = React.useState(0);
  const [userObject, setUserObject] = useState(null);
  const [orderList, setOrderList] = useState([]);
  const user = useSelector((state) => state.auth).current;
  const userId = user ? user[STORAGE_USER.ID] : null;
  const dispatch = useDispatch();

  const handleSearchSubmit = async (values) => {
    await fetchOrder(values);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = async (values) => {
    const updateValues = {
      ...values,
    };

    const updateFormData = new FormData();
    for (let key in updateValues) {
      const updateValue = updateValues[key];

      switch (key) {
        case 'avatarImage':
          if (updateValue.length <= 0) break;
          for (let i = 0; i < updateValue.length; i++) {
            updateFormData.append(key, updateValue.item(i));
          }
          break;
        default:
          updateFormData.append(key, updateValue);
          break;
      }
    }

    try {
      const data = await userApi.updateFormData(userId, updateFormData);
      setUserObject(data);

      const actionSnackbar = open({
        status: true,
        message: 'Cập nhật thông tin thành công',
        type: 'success',
      });
      dispatch(actionSnackbar);
    } catch (error) {
      const actionSnackbar = open({
        status: true,
        message: 'Cập nhật thông tin không thành công',
        type: 'error',
      });
      dispatch(actionSnackbar);
    }
  };

  React.useEffect(() => {
    fetchUser();
    fetchOrder();
  }, []);

  const fetchUser = async () => {
    try {
      if (!userId) return;

      const data = await userApi.getById(userId);
      if (!data) return;

      setUserObject(data);
    } catch (error) {
      console.log('Fail to fetch user: ', error);
    }
  };

  const fetchOrder = async (filters) => {
    try {
      const params = { ...filters, userId: userId };

      const { data } = await orderApi.getAll(params);
      setOrderList(data);
    } catch (error) {
      console.log('Fail to fetch: ', error);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Thông tin" {...a11yProps(0)} />
          <Tab label="Đơn hàng" {...a11yProps(1)} />
          <Tab label="Đổi mật khẩu" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProfileForm user={userObject} onSubmit={handleSubmit} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileOrder orderList={orderList} onSearchSubmit={handleSearchSubmit} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProfileSecurity />
      </TabPanel>
    </Box>
  );
}
