import React, { FC, useState } from 'react'
import Container from '@mui/material/Container'
import Masonry from '@mui/lab/Masonry'
import AnimeCard from '../components/AnimeCard'
import apiHQ from '../api/apiHQ'
import Filter from '../components/Filter'
import { Button } from '@mui/material'

const MainPage:FC<{filter:string}> = ({ filter }) => {
  const [visible, setVisible] = useState(false)
  const { data } = apiHQ(filter)
  const onScrollsHandler = (e:any) => {
    if (e.currentTarget.clientHeight + e.currentTarget.scrollTop >= e.currentTarget.scrollHeight - 50) {
      // set next page
    }
  }
  const animeList = data?.Page?.media ?? []
  return (
<Container onScroll={onScrollsHandler } maxWidth='xl' sx={{ maxHeight: '800px', mt: '72px', position: 'relative', overflowY: 'scroll' }} >
    {!visible && <Button
    variant="contained"
    sx={{
      position: 'fixed',
      zIndex: '100',
      borderRadius: '100px',
      pt: '20px',
      pb: '20px',
      right: '10px',
      bottom: '10px'
    }}
      onClick={() => setVisible((state) => !state)}>Filter</Button>}
    {visible && <Filter setVisible={setVisible}/>}

    <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5 }} spacing={1}>
      {animeList && animeList.map((item:any, index:any) => {
        return <AnimeCard key={index} anime={item} />
      })}
      </Masonry>
</Container>
  )
}

export default MainPage
