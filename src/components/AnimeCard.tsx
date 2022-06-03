import React, { FC } from 'react'
import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
// import Typography from '@mui/material/Typography'
import { CardActionArea, CardHeader } from '@mui/material'

const AnimeCard:FC<{anime:any}> = ({ anime }) => {
  const img = anime.coverImage.large
  const title = anime.title.romaji
  const color = anime.coverImage.color
  // const descriptions = anime.description

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
        width: '135px',
        objectFit: 'contained'

      }}
        component="img"
        height="auto"
        src={img}
        alt="img"
      />
      {/* <CardContent>
        <Typography gutterBottom color='black' variant="h5" component="div">
          {title}
        </Typography> */}
        {/* <Typography variant="body2" color="black">
          {descriptions.length > 400 ? `${descriptions.slice(0, 400)}...` : descriptions}
        </Typography> */}
      {/* </CardContent> */}
    </CardActionArea>
  </Card>

  )
}

export default AnimeCard
