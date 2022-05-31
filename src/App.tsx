import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import MainPage from './pages/MainPage'
import SignInPage from './pages/SignInPage'
import { SignUpPage } from './pages/SignUpPage'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/Profile'
import { Box } from '@mui/material'

export const App = () => {
  return (
  <Box sx={{ height: '100vh', backgroundColor: '#d6e3f8' }}>
  <Router>
  <NavBar />
  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/sign-in' element={<SignInPage />} />
    <Route path='/sign-up' element={<SignUpPage />} />
    <Route path='/profile' element = {<PrivateRoute />}>
      <Route path='/profile' element={<Profile />} />
    </Route>
  </Routes>
  </Router>
  </Box>
  )
}
