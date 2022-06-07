import React, { FC } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Grid, Typography } from '@mui/material'
import { SelectTag } from './FilterInput/SelectTag'
import CheckIcon from '@mui/icons-material/Check'
import TypeSelect from './FilterInput/TypeSelect'
import { DataPicker } from './FilterInput/DataPicker'

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
      backgroundColor: '#ffffff',
      m: 2,
      p: '4px 25px',
      height: 'fit-content',
      maxWidth: '1100px'
    }}>
        <Grid sx={{ backgroundColor: '#102122b6', mr: '40px', ml: '40px' }} item xs={12} >
          <Typography sx={{ }} variant='h6' align='center'>FILTER</Typography>
          </Grid>
        <Grid item > <DataPicker/></Grid>
        <Grid item > <TypeSelect /></Grid>
        <Grid item > <SelectTag animeGenre={animeGenre} /></Grid>
        <Button
        sx={{ position: 'absolute', right: '-15px', top: '-5px' }}
        onClick={() => setVisible(false)}>
          <CloseIcon fontSize='large'/>
          </Button>
          <Button
        sx={{ position: 'absolute', right: '-15px', bottom: '-5px' }}
        onClick={() => setVisible(false)}>
          <CheckIcon fontSize='large'/>
          </Button>
    </Grid>
  )
}

export default Filter
