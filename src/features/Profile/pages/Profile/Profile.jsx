import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileMain from '../../components/ProfileMain/ProfileMain';

Profile.propTypes = {};

function Profile(props) {
  return (
    <Container>
      <ProfileHeader />
      <ProfileMain />
    </Container>
  );
}

export default Profile;
