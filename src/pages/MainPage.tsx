import React, { FC, useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Masonry from '@mui/lab/Masonry'
import AnimeCard from '../components/AnimeCard'
import { apiHQ, FilterScheme } from '../api/apiHQ'
import Filter from '../components/Filter'
import { Backdrop, Box, Button, CircularProgress, Typography } from '@mui/material'
import { Media } from '../model/animeModel'
import { toast } from 'react-toastify'

interface Props {
  search:string
  page:number
  setPage:React.Dispatch<number>
}

const MainPage:FC<Props> = ({ search, page, setPage }) => {
  const [filter, setFilter] = useState<FilterScheme>({ type: undefined, genre_in: undefined, seasonYear: undefined })
  const [visible, setVisible] = useState(false)
  const [animeState, setAnimeState] = useState<Media[]|[]>([])
  const { data, loading, error } = apiHQ(search, page, filter)
  const animePage = data && data.Page.pageInfo.currentPage
  const animeList = data && data.Page.media
  const animeGenre = data && data.GenreCollection
  const nextPage = data && data.Page.pageInfo.hasNextPage
  useEffect(() => {
    if (error) {
      toast.warn(error.message)
    }
    if (animeList !== undefined) {
      setAnimeState((state) => {
        if (page === 1) {
          return animeList
        }
        const newState = [...state, ...animeList]
        return newState
      })
    }
  }, [page, animeList, filter, error])

  const onScrollsHandler = (e:any) => {
    if (e.currentTarget.clientHeight +
      e.currentTarget.scrollTop >=
      e.currentTarget.scrollHeight - 80 &&
      animePage && nextPage) {
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
      <Backdrop
        sx={{ color: '#fff', zIndex: 1 }}
        open={visible}
      >
      <Filter setPage={setPage} setVisible={setVisible} animeGenre={animeGenre} setFilter={setFilter}/>
    </Backdrop>
    {animeState?.length === 0 && !loading && <Box ><Typography align='center' variant='h2'>There are no anime and manga, change filter settings</Typography></Box>}
     <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5 }} spacing={1}>
      {animeState !== null && animeState.map((item:any, index:any) => {
        return <AnimeCard key={index} anime={item} />
      })}
    </Masonry>
    <Backdrop open={loading} >
      <CircularProgress size={80} />
    </Backdrop>
  </Container>
  )
}

export default MainPage
