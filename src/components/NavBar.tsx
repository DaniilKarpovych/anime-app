import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import LoginIcon from '@mui/icons-material/Login'
import HomeIcon from '@mui/icons-material/Home'
import { Avatar, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material'
import { Logout } from '@mui/icons-material'

const NavBar = () => {
  const user = Boolean(auth.currentUser)
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const onClickLogout = () => {
    console.log('LOGOUT')
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
                <HomeIcon onClick={() => navigate('/')}/>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                AnilistApp
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
            </Box>
              <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {user && <MenuItem onClick={() => navigate('/profile')}>
          <Avatar /> Profile
        </MenuItem>}
        {!user && <MenuItem onClick={() => navigate('/sign-up')}>
          <LoginIcon sx={{ marginLeft: '-5px', marginRight: '10px' }} />  Sign-up
        </MenuItem>}
        {!user && <MenuItem onClick={() => navigate('/sign-in')}>
          <LoginIcon sx={{ marginLeft: '-5px', marginRight: '10px' }}/> Login
        </MenuItem>}
        {user && <MenuItem onClick={onClickLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>}
      </Menu>
            </Toolbar>
          </AppBar>
        </Box>
  )
}

export default NavBar
