import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import ProfileAvatar from './components/ProfileAvatar/ProfileAvatar';
import ProfileForm from './components/ProfileForm/ProfileForm';
import ProfileSecurity from './components/ProfileSecurity/ProfileSecurity';
import ProfileTable from './components/ProfileTable/ProfileTable';

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Thông tin" {...a11yProps(0)} />
          <Tab label="Đơn hàng" {...a11yProps(1)} />
          <Tab label="Đổi mật khẩu" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid xs={12} md={4} item>
            <ProfileAvatar />
          </Grid>
          <Grid xs={12} md={8} item>
            <ProfileForm />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProfileSecurity />
      </TabPanel>
    </Box>
  );
}
