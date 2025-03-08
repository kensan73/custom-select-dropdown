import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const variants = [
  {
    id: 3,
    name: 'Voucher',
    slug: 'voucher',
    type: 'Main',
    locale: 'en',
    created_at: '2021-11-15T08:27:23.000Z',
    updated_at: '2021-11-15T08:27:23.000Z',
    cover: null,
  },
  {
    id: 1,
    name: 'Top Up',
    slug: 'top-up',
    type: 'Main',
    locale: 'en',
    created_at: '2021-11-15T08:26:44.000Z',
    updated_at: '2021-11-15T08:26:44.000Z',
    cover: null,
  },
  {
    id: 2,
    name: 'Game Key',
    slug: 'game-key',
    type: 'Main',
    locale: 'en',
    created_at: '2021-11-15T08:27:03.000Z',
    updated_at: '2021-11-15T08:27:03.000Z',
    cover: null,
  },
  {
    id: 12,
    name: 'Other',
    slug: 'other',
    type: 'SubMain',
    locale: 'en',
    created_at: '2021-11-15T08:30:50.000Z',
    updated_at: '2021-11-15T08:30:50.000Z',
    cover: null,
  },
  {
    id: 11,
    name: 'Nintendo',
    slug: 'nintendo',
    type: 'SubMain',
    locale: 'en',
    created_at: '2021-11-15T08:30:22.000Z',
    updated_at: '2021-11-15T08:30:22.000Z',
    cover: null,
  },
  {
    id: 10,
    name: 'Xbox',
    slug: 'xbox',
    type: 'SubMain',
    locale: 'en',
    created_at: '2021-11-15T08:30:08.000Z',
    updated_at: '2021-11-15T08:30:08.000Z',
    cover: null,
  },
];

export default function MultipleSelectCheckmarks() {
  const [variantName, setVariantName] = React.useState([
    {
      id: 11,
      name: 'Nintendo',
      slug: 'nintendo',
      type: 'SubMain',
      locale: 'en',
      created_at: '2021-11-15T08:30:22.000Z',
      updated_at: '2021-11-15T08:30:22.000Z',
      cover: null,
    },
    {
      id: 10,
      name: 'Xbox',
      slug: 'xbox',
      type: 'SubMain',
      locale: 'en',
      created_at: '2021-11-15T08:30:08.000Z',
      updated_at: '2021-11-15T08:30:08.000Z',
      cover: null,
    },
  ]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const preventDuplicate = value.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i
    );
    setVariantName(
      // On autofill we get a the stringified value.
      typeof preventDuplicate === 'string'
        ? preventDuplicate.split(',')
        : preventDuplicate
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={variantName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.map((x) => x.name).join(', ')}
          MenuProps={MenuProps}
        >
          {variants.map((variant) => (
            <MenuItem key={variant.id} value={variant}>
              <Checkbox checked={variantName.indexOf(variant) > -1} />
              <ListItemText primary={variant.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
