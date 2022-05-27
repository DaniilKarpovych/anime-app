import React, { FC } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
import AnimeCard from '../components/AnimeCard'
import apiHQ from '../api/apiHQ'
import Filter from '../components/Filter'
import { useMediaQuery } from '@mui/material'

const MainPage:FC = () => {
  const { loading, error, data } = apiHQ()
  const matches = useMediaQuery('(min-width:1100px)')
  const animeList = data?.Page?.media
  console.log('DATA', data)
  return (
<Container maxWidth={false} sx={{ backgroundColor: '#93b4e9', display: 'flex' }} >
      {matches && <Filter />}
    <Box sx={{ overflowY: 'scroll', width: 'fit-content', m: 1, height: '93vh' }}>
      {!loading && !error && animeList.length > 0 && animeList.map((item:any, index:any) => {
        return <AnimeCard key={index} anime={item} />
      })}
    </Box>
</Container>
  )
}

export default MainPage
