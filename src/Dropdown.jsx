import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 150 }} size='small'>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value=''>
            <em>Last 30 days</em>
          </MenuItem>
          <MenuItem value={10}>Last 6 months</MenuItem>
          <MenuItem value={20}>Last week</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
