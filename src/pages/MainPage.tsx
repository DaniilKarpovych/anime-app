import React, { FC, useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import AnimeCard from '../components/AnimeCard'
import apiHQ from '../api/apiHQ'
import Filter from '../components/Filter'
import { Button, useMediaQuery } from '@mui/material'

const MainPage:FC<{filter:string}> = ({ filter }) => {
  const [visible, setVisible] = useState(false)
  const { loading, error, data } = apiHQ(filter)
  const matches = useMediaQuery('(min-width:1000px)')
  const animeList = data?.Page?.media
  return (
<Container maxWidth={false} >
    <Button fullWidth variant="outlined" sx={{ mt: '10px' }} onClick={() => setVisible((state) => !state)}>Filter</Button>
    {visible && <Filter />}
    <Box sx={{ overflowY: 'scroll', maxWidth: '1000px', margin: 'auto', height: `${(visible && !matches) ? '400px' : '800px'}` }}>
      {!loading && !error && animeList.length > 0 && animeList.map((item:any, index:any) => {
        return <AnimeCard key={index} anime={item} />
      })}
    </Box>
</Container>
  )
}

export default MainPage
