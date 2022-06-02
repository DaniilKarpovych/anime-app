import React, { FC, useState } from 'react'
import Container from '@mui/material/Container'
// import Box from '@mui/material/Box'
import AnimeCard from '../components/AnimeCard'
import apiHQ from '../api/apiHQ'
import Filter from '../components/Filter'
import { Button, Grid, useMediaQuery } from '@mui/material'

const MainPage:FC<{filter:string}> = ({ filter }) => {
  const [visible, setVisible] = useState(false)
  const { data } = apiHQ(filter)
  const matches = useMediaQuery('(min-width:1000px)')
  const animeList = data?.Page?.media ?? false
  return (
<Container maxWidth='xl' >
    {!visible && <Button fullWidth variant="outlined" sx={{ mt: '10px' }} onClick={() => setVisible((state) => !state)}>Filter</Button>}
    {visible && <Filter setVisible={setVisible}/>}
    <Grid
    container
    columns={12}
    sx={{
      backgroundColor: 'lightblue',
      border: '1px solid grey',
      overflowY: 'scroll',
      maxWidth: '1300px',
      margin: 'auto',
      height: `${(visible && !matches) ? '550px' : '750px'}`,
      mt: 1
    }}>
      {animeList && animeList.map((item:any, index:any) => {
        return <AnimeCard key={index} anime={item} />
      })}
    </Grid>
</Container>
  )
}

export default MainPage
