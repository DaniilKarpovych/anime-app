import React, { FC } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import { Box } from '@mui/material'

const ITEM_HEIGHT = 30
const ITEM_PADDING_TOP = 0
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
      width: 200
    }
  }
}

interface Props {
    animeGenre:[string] | undefined
    genre:string[]
    setGenres: React.Dispatch<string[]>
}

export const SelectGenre:FC<Props> = ({ animeGenre, genre, setGenres }) => {
  const handleChange = (event: SelectChangeEvent<typeof genre>) => {
    const {
      target: { value }
    } = event

    setGenres(
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
          value={genre}
          onChange={handleChange}
          input={<OutlinedInput label="Genre" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {animeGenre && animeGenre.filter((item) => item !== 'Hentai').map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={genre.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
