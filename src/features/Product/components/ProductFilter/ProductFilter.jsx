import { RestaurantRounded } from '@mui/icons-material';
import { Button, Checkbox, FormControl, FormGroup, ListSubheader, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import FormControlLabel from '@mui/material/FormControlLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { PropTypes } from 'prop-types';
import * as React from 'react';

ProductFilter.propTypes = {
  radioValue: PropTypes.number,
  checkBoxValue: PropTypes.array,
  openDrawer: PropTypes.bool,
  onCloseFilter: PropTypes.func,
  onRadioChange: PropTypes.func,
  onCheckBoxChange: PropTypes.func,
  onDefault: PropTypes.func,
};

ProductFilter.defaultValues = {
  radioValue: 0,
  checkBoxValue: [],
  openDrawer: false,
  onCloseFilter: null,
  onRadioChange: null,
  onCheckBoxChange: null,
  onDefault: null,
};

export default function ProductFilter({
  radioValue,
  checkBoxValue,
  openDrawer,
  onCloseFilter,
  onRadioChange,
  onCheckBoxChange,
  onDefault,
}) {
  const [state, setState] = React.useState([
    {
      id: 1,
      name: 'Rolex',
    },
    {
      id: 2,
      name: 'Patek Philippe',
    },
    {
      id: 3,
      name: 'Omega',
    },
    {
      id: 4,
      name: 'Cartier',
    },
  ]);

  const handleCloseFilter = () => {
    if (onCloseFilter) onCloseFilter();
  };

  const handleRadioChange = (e, value) => {
    if (onRadioChange) onRadioChange({ radio: value });
  };

  const handleCheckBoxChange = (e) => {
    const id = Number(e.target.dataset.id);
    const hasId = checkBoxValue.includes(id);

    if (hasId) {
      checkBoxValue = checkBoxValue.filter((x) => x !== id);
    } else {
      checkBoxValue.push(id);
    }

    const value = {
      checkbox: checkBoxValue,
    };

    if (onCheckBoxChange) onCheckBoxChange(value);
  };

  const handleDefault = () => {
    if (onDefault) onDefault();
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onKeyDown={handleCloseFilter}>
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Typography variant="button">L???c s???n ph???m</Typography>
          </ListSubheader>
        }
        sx={{ pb: 0 }}
      />
      <Divider />
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Typography variant="button">B??? s??u t???p</Typography>
          </ListSubheader>
        }
      >
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={radioValue}
          name="radio"
          onChange={handleRadioChange}
        >
          {[
            { id: 0, name: 'T???t c???' },
            { id: 1, name: '?????ng h??? nam' },
            { id: 2, name: '?????ng h??? n???' },
            { id: 3, name: '?????ng h??? ????i' },
            { id: 4, name: 'Ph??? ki???n' },
          ].map((item) => (
            <ListItem
              key={item.name + item.id}
              disablePadding
              sx={{ display: 'block', color: 'inherit' }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: openDrawer ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <FormControlLabel value={item.id} control={<Radio />} label={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </RadioGroup>
      </List>
      <Divider />
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Typography variant="button">Th????ng hi???u new</Typography>
          </ListSubheader>
        }
      >
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            {state.map((item) => (
              <ListItem key={item.id} disablePadding sx={{ display: 'block', color: 'inherit' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: openDrawer ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        inputProps={{ 'data-id': item.id }}
                        checked={checkBoxValue.includes(item.id)}
                        onChange={handleCheckBoxChange}
                      />
                    }
                    label={item.name}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </FormGroup>
        </FormControl>
      </List>
      <Button onClick={handleDefault} fullWidth>
        ?????t l???i
      </Button>
    </Box>
  );

  return (
    <Drawer
      sx={(theme) => ({ zIndex: theme.zIndex.drawer + 2 })}
      anchor="right"
      open={openDrawer}
      onClose={handleCloseFilter}
    >
      {list()}
    </Drawer>
  );
}
