import React, { useState } from 'react'
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
import { auth } from './firebaseConfig'

export const App = () => {
  const [filter, setFilter] = useState<string>('')
  return (
  <Box sx={{ height: '100vh', backgroundColor: '#d6e3f8' }}>
  <Router>
  <NavBar filter={filter} setFilter={setFilter} />
  <Routes>
    {!auth.currentUser && <Route path='/sign-in' element={<SignInPage />} />}
    {!auth.currentUser && <Route path='/sign-up' element={<SignUpPage />} />}
    <Route path='/profile' element = {<PrivateRoute />}>
      <Route path='/profile' element={<Profile />} />
    </Route>
    <Route path='/*' element={<MainPage filter={filter}/>} />
  </Routes>
  </Router>
  </Box>
  )
}
