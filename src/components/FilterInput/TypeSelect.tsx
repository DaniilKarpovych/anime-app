import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { FC } from 'react'

interface Props {
  type:string
  setType:React.Dispatch<string>
}

const TypeSelect:FC<Props> = ({ type, setType }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string)
  }
  return (
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Type</InputLabel>
  <Select
  sx={{ width: '200px' }}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={type}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value='ANIME'>Anime</MenuItem>
    <MenuItem value='MANGA'>Manga</MenuItem>
  </Select>
</FormControl>
  )
}

export default TypeSelect
