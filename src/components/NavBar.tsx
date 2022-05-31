import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'

const NavBar = () => {
  const navigate = useNavigate()
  const onClickLogout = () => {
    try {
      signOut(auth)
    } catch (e) {
      console.warn('signout', e)
    }
  }
  return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: '#6f88b0' }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                AnilistApp
              </Typography>
              <Button onClick={() => navigate('/sign-in')} color="inherit">Login</Button>
              <Button onClick={() => navigate('/sign-up')} color="inherit">sign-up</Button>
              <Button><NavLink to='/' color="inherit">Home</NavLink></Button>
              <Button><NavLink to='/profile' color="inherit">Profile</NavLink></Button>
              <Button color='primary' onClick={onClickLogout}>LOCKOUT</Button>
            </Toolbar>
          </AppBar>
        </Box>
  )
}

export default NavBar
