import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import AboutUsHeader from '../../components/AboutUsHeader/AboutUsHeader';
import AboutUsMain from '../../components/AboutUsMain/AboutUsMain';

AboutUs.propTypes = {};

function AboutUs(props) {
  return (
    <Container>
      <AboutUsHeader />
      <AboutUsMain />
    </Container>
  );
}

export default AboutUs;
