import React, { FC, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import CustomMenu from './CustomMenu'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useNavigate } from 'react-router-dom'
import { TextField, useMediaQuery } from '@mui/material'

interface Props {
  filter:string
  setFilter:React.Dispatch<string>
}

const NavBar:FC<Props> = ({ filter, setFilter }) => {
  const navigate = useNavigate()
  const matches = useMediaQuery('(min-width:480px)')

  const [showSearch, setShowSearch] = useState(false)
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }
  return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: '#85a3d3' }}>
            <Toolbar>
              <IconButton
                onClick={() => navigate('/')}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <HomeIcon />
              </IconButton>
              {(!showSearch || matches) && <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                AnilistApp
              </Typography>}
              {showSearch && <TextField
                autoFocus={true}
                onChange={onChangeHandler}
                variant='standard'
                size="medium"
                sx={{ backgroundColor: 'white', borderRadius: '15px', pl: '10px', pr: '10px' }}
               />}
              {!showSearch && <SearchIcon onClick={() => setShowSearch(true)}/>}
              {showSearch && <CloseIcon onClick={() => {
                setShowSearch(false)
                setFilter('')
              }
                }/>}
             <CustomMenu />
            </Toolbar>
          </AppBar>
        </Box>
  )
}

export default NavBar
