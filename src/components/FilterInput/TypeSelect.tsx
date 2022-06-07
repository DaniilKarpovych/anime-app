import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'

const TypeSelect = () => {
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }
  return (
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Type</InputLabel>
  <Select
  sx={{ width: '200px' }}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
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
