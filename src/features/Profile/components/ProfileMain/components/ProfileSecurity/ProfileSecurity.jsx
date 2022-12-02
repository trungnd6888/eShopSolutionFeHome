import React from 'react';
import authApi from '../../../../../../api/authApi';
import ProfileSecurityForm from './ProfileSecurityForm/ProfileSecurityForm';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../../../../../Auth/snackBarSlice';
import { STORAGE_USER } from '../../../../../../constants/common';

ProfileSecurity.propTypes = {};

function ProfileSecurity(props) {
  const user = useSelector((state) => state.auth).current;
  const userId = user[STORAGE_USER.ID];
  const dispatch = useDispatch();

  const handleSubmit = async (values, handleResetForm) => {
    try {
      const data = { ...values, userId: userId };

      await authApi.changePassword(data);

      const actionSnackbar = open({
        status: true,
        message: 'Cập nhật mật khẩu thành công',
        type: 'success',
      });
      dispatch(actionSnackbar);

      console.log('Change password success');

      handleResetForm();
    } catch (error) {
      let message = 'Cập nhật mật khẩu không thành công';
      const errorList = error.response.data.error?.map((x) => x.code);
      if (errorList.includes('PasswordMismatch')) message = 'Mật khẩu cũ chưa đúng';

      const actionSnackbar = open({
        status: true,
        message: message,
        type: 'error',
      });
      dispatch(actionSnackbar);

      console.log('Fail to change password', error);
    }
  };

  return <ProfileSecurityForm onSubmit={handleSubmit} />;
}

export default ProfileSecurity;
