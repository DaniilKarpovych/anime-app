import { Grid, TextField } from '@mui/material'
import React from 'react'

const Filter = () => {
  return (
    <Grid container sx={{ backgroundColor: '#819ecc', m: 1, p: 1, borderRadius: '30px', height: 'fit-content' }}>
        <Grid item sm={12} md={6} xl={3}> <TextField margin="normal" size='small' /></Grid>
        <Grid item sm={12} md={6} xl={3}> <TextField margin="normal" size='small' /></Grid>
        <Grid item sm={12} md={6} xl={3}> <TextField margin="normal" size='small' /></Grid>
        <Grid item sm={12} md={6} xl={3}> <TextField margin="normal" size='small' /></Grid>

    </Grid>
  )
}

export default Filter
