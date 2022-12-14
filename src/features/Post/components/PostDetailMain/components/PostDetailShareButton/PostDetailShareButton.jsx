import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import * as React from 'react';

export default function PostDetailShareButton() {
  const actions = [
    {
      icon: <FacebookOutlinedIcon />,
      name: 'Facebook',
      url: 'https://www.facebook.com/',
    },
    {
      icon: <InstagramIcon />,
      name: 'Instagram',
      url: 'https://www.instagram.com/',
    },
    {
      icon: <TwitterIcon />,
      name: 'Twitter',
      url: 'https://twitter.com/',
    },
  ];

  return (
    <SpeedDial
      sx={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        p: { xs: 3, sm: 5 },
        pb: { xs: 3.5, sm: 5.5 },
      }}
      ariaLabel="SpeedDial basic example"
      icon={<ShareIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          components={Link}
          href={action.url}
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
