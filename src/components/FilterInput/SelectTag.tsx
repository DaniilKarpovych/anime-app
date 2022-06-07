import React, { FC, useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import { Box } from '@mui/material'

const ITEM_HEIGHT = 40
const ITEM_PADDING_TOP = 4
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200
    }
  }
}

interface Props {
    animeGenre:[string]
}

export const SelectTag:FC<Props> = ({ animeGenre }) => {
  const [selGenres, setSelGenres] = useState<string[]>([])
  console.log('Value', selGenres)
  const handleChange = (event: SelectChangeEvent<typeof selGenres>) => {
    const {
      target: { value }
    } = event

    setSelGenres(
      typeof value === 'string' ? value.split(',') : value
    )
  }

  return (
    <Box component='div'>
      <FormControl sx={{ width: '200px' }}>
        <InputLabel id="demo-multiple-checkbox-label">Genre</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selGenres}
          onChange={handleChange}
          input={<OutlinedInput label="Genre" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {animeGenre && animeGenre.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selGenres.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
