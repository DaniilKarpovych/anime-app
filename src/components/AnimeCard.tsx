import React, { FC } from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea, CardHeader } from '@mui/material'

const AnimeCard:FC<{anime:any}> = ({ anime }) => {
  const img = anime.coverImage.large
  const title = anime.title.romaji
  const color = anime.coverImage.color

  return (

    <Card sx={{ height: 'auto', backgroundColor: `${color}`, margin: '5px' }}>
    <CardActionArea >
      <CardHeader
      sx={{ width: 'auto', textAlign: 'center' }}
      title={title}
      />

      <CardMedia
      sx={{
        margin: 'auto',
        maxWidth: '140px',
        objectFit: 'contained'

      }}
        component="img"
        height="auto"
        src={img}
        alt="img"
      />
    </CardActionArea>
  </Card>

  )
}

export default AnimeCard
