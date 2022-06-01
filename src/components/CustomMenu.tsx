import React, { useState } from 'react'
import { Avatar, Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material'
import { Logout } from '@mui/icons-material'
import LoginIcon from '@mui/icons-material/Login'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'

const CustomMenu = () => {
  const user = Boolean(auth.currentUser)
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
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
    <>
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
        {user && <MenuItem onClick={() => navigate('/profile')} >
        <ListItemIcon>
        <Avatar />
        </ListItemIcon>
        Profile
        </MenuItem>}
         {!user && <MenuItem onClick={() => navigate('/sign-up')}>
            <LoginIcon sx={{ marginLeft: '-5px', marginRight: '10px' }} />  Sign-up
        </MenuItem>}
        {!user && <MenuItem onClick={() => navigate('/sign-in')}>
            <LoginIcon sx={{ marginLeft: '-5px', marginRight: '10px' }}/> Login
        </MenuItem>}
       {user && <MenuItem onClick={onClickLogout}>
        <ListItemIcon >
        <Logout fontSize="small" />
        </ListItemIcon>
        Logout
        </MenuItem>}
    </Menu>
</>
  )
}

export default CustomMenu
