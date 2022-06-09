import React, { FC } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

interface Props {
  seasonYear:Date | null
  setSeasonYear:React.Dispatch<Date | null>
}

export const DataPicker:FC<Props> = ({ seasonYear, setSeasonYear }) => {
  return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
         <DatePicker
        views={['year']}
        label="Year"
        maxDate={new Date()}
        value={seasonYear}
        onChange={(newValue) => {
          setSeasonYear(newValue)
        }}
        renderInput={(params) => <TextField sx={{ width: '200px' }} {...params} helperText={null} />}
      />
      </LocalizationProvider>
  )
}
