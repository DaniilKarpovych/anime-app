import React, { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const AnimeCard:FC<{anime:any}> = ({ anime }) => {
  console.log('anime', anime)
  const img = anime.coverImage.large
  const title = anime.title.romaji
  const color = anime.coverImage.color
  const descriptions = anime.description

  return (
    <Card sx={{ display: 'flex', backgroundColor: '#cacfda', margin: '5px', boxShadow: `4px 4px 4px 4px ${color}` }}>
    <CardActionArea sx={{ display: 'flex', justifyContent: 'flex-start' }} >
      <CardMedia
      sx={{
        width: '150px',
        objectFit: 'cover',
        backgroundPosition: 'left'

      }}
        component="img"
        height="auto"
        src={img}
        alt="img"
      />
      <CardContent>
        <Typography gutterBottom color='black' variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="black">
          {descriptions.length > 400 ? `${descriptions.slice(0, 400)}...` : descriptions}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default AnimeCard
