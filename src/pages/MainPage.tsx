import React, { FC, useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Masonry from '@mui/lab/Masonry'
import AnimeCard from '../components/AnimeCard'
import apiHQ from '../api/apiHQ'
import Filter from '../components/Filter'
import { Button } from '@mui/material'
// import { DataArrayTwoTone } from '@mui/icons-material'

interface Props {
  search:string
  page:number
  setPage:React.Dispatch<number>
}

const MainPage:FC<Props> = ({ search, page, setPage }) => {
  const [visible, setVisible] = useState(false)
  const [animeState, setAnimeState] = useState<any>([])
  const [genreIn] = useState(undefined)
  const { data, loading, error } = apiHQ(search, page, genreIn)
  console.log(data)
  const animePage = data && data.Page.pageInfo.currentPage
  const animeList = data && data.Page.media
  const animeGenre = data && data.GenreCollection

  useEffect(() => {
    if (!loading && !error) {
      setAnimeState((state:any) => {
        if (page === 1) {
          return animeList
        }
        return [...state, ...animeList]
      })
    }
  }, [page, loading])

  const onScrollsHandler = (e:any) => {
    if (e.currentTarget.clientHeight +
      e.currentTarget.scrollTop >=
      e.currentTarget.scrollHeight - 80 &&
      (animePage ?? animePage)) {
      setPage(animePage + 1)
    }
  }

  return (
  <Container
    onScroll={onScrollsHandler }
    maxWidth='xl'
    sx={{
      maxHeight: '100vh',
      pt: '72px',
      position: 'relative',
      overflowY: 'scroll',
      '&::-webkit-scrollbar-track': {
        webkitBoxShadow: 'inset 0 0 6px red',
        backgroundColor: '#b6393917',
        marginBlockStart: '64px'

      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#cc2f2f18',
        outline: '1px solid slategrey',
        borderRadius: '10px'
      },
      '&::-webkit-scrollbar': {
        width: '0.4em'

      }
    }}>
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
    {visible && <Filter setVisible={setVisible} animeGenre={animeGenre}/>}
    <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5 }} spacing={1}>
      {animeState.length > 0 && animeState.map((item:any, index:any) => {
        return <AnimeCard key={index} anime={item} />
      })}
    </Masonry>
  </Container>
  )
}

export default MainPage
