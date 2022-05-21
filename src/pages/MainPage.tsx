import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const MainPage = () => {
  return (
<Container maxWidth={false} disableGutters={true} sx={{ backgroundColor: 'yellow' }} >
    <Grid container spacing={2}>
  <Grid item xs={4} sx={{ backgroundColor: 'blue', height: '100vh' }}>
    <p>xs=4</p>
  </Grid>
  <Grid item xs={8} sx={{ backgroundColor: 'green', height: '100vh' }}>
    <p>xs=8</p>
  </Grid>
</Grid>
        </Container>
  )
}

export default MainPage
