import React, { FC, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Grid, Typography } from '@mui/material'
import { SelectGenre } from './FilterInput/SelectGenre'
import CheckIcon from '@mui/icons-material/Check'
import TypeSelect from './FilterInput/TypeSelect'
import { DataPicker } from './FilterInput/DataPicker'
import { FilterScheme } from '../api/apiHQ'

interface Props {
  setVisible:React.Dispatch<boolean>
  animeGenre:[string] | undefined
  setFilter:React.Dispatch<FilterScheme>
  setPage:React.Dispatch<number>
}

const Filter:FC<Props> = ({ setVisible, animeGenre, setFilter, setPage }) => {
  const [type, setType] = useState<string>('')
  const [seasonYear, setSeasonYear] = useState<Date | null>(new Date())
  const [genre, setGenres] = useState<string[] >([])

  const onClickHandler = () => {
    setFilter({
      type: type || undefined,
      seasonYear: seasonYear && type !== 'MANGA' ? new Date(seasonYear).getFullYear() : undefined,
      genre_in: genre.length ? genre : undefined
    })
    setPage(1)
    setVisible(false)
  }
  const onClickClose = () => {
    setFilter({
      type: undefined,
      seasonYear: undefined,
      genre_in: undefined
    })
    setVisible(false)
  }
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
        {type !== 'MANGA' && <Grid item > <DataPicker seasonYear={seasonYear} setSeasonYear={setSeasonYear}/></Grid>}
        <Grid item > <TypeSelect type={type} setType={setType} /></Grid>
        <Grid item > <SelectGenre animeGenre={animeGenre} genre={genre} setGenres={setGenres} /></Grid>
        <Button
          sx={{ position: 'absolute', right: '-15px', top: '-5px' }}
          onClick={onClickClose}>
          <CloseIcon fontSize='large'/>
        </Button>
        <Button
            sx={{ position: 'absolute', right: '-15px', bottom: '-5px' }}
            onClick={onClickHandler}>
          <CheckIcon fontSize='large'/>
        </Button>
    </Grid>
  )
}

export default Filter
