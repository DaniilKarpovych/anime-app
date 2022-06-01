import { Box, Typography } from '@mui/material'
import React from 'react'
import { auth } from '../firebaseConfig'

const Profile = () => {
  return (
    <Box>
      <Typography variant='h1' align='center'>Profile</Typography>
      <Typography variant='h3' align='center'>{auth.currentUser?.displayName}</Typography>
      </Box>
  )
}

export default Profile
