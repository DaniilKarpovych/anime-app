import React, { FC } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Grid, TextField } from '@mui/material'
import { SelectTag } from './FilterInpust/SelectTag'

interface Props {
  setVisible:React.Dispatch<boolean>
  animeGenre:[string]
}

const Filter:FC<Props> = ({ setVisible, animeGenre }) => {
  return (
    <Grid
    position='relative'
    container
    columnGap={3}
    rowGap={3}
    sx={{
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: '#819ecc',
      m: 1,
      p: 1,
      borderRadius: '30px',
      height: 'fit-content',
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
        <Grid item > <TextField size='small' /></Grid>
        <Grid item > <TextField size='small' /></Grid>
        <Grid item > <TextField size='small' /></Grid>
        <Grid item > <SelectTag animeGenre={animeGenre} /></Grid>
        <Button sx={{ position: 'absolute', right: '-35px', top: '-15px' }} onClick={() => setVisible(false)}><CloseIcon/></Button>
    </Grid>
  )
}

export default Filter
