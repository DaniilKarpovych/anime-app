import { Box, TextField } from '@mui/material'
import React from 'react'

const Filter = () => {
  return (
    <Box component='div' sx={{ backgroundColor: '#819ecc', maxWidth: '350px', m: 1, p: 1, borderRadius: '30px', height: 'fit-content' }}>
        <TextField fullWidth margin="normal" label="Search"/>
        <TextField fullWidth margin="normal"/>
        <TextField fullWidth margin="normal"/>
        <TextField fullWidth margin="normal"/>
    </Box>
  )
}

export default Filter
