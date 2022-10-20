import React from 'react';
import PropTypes from 'prop-types';
import ContactHeader from '../../components/ContactHeader/ContactHeader';
import ContactMain from '../../components/ContactMain/ContactMain';
import { Container } from '@mui/material';

Contact.propTypes = {};

function Contact(props) {
  return (
    <Container>
      <ContactHeader />
      <ContactMain />
    </Container>
  );
}

export default Contact;
