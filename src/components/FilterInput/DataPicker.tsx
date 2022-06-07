import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

export const DataPicker = () => {
  const [value, setValue] = useState<Date | null>(new Date())

  return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
         <DatePicker
        views={['year']}
        label="Year"
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(params) => <TextField sx={{ width: '200px' }} {...params} helperText={null} />}
      />
      </LocalizationProvider>
  )
}
