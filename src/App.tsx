import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import NavBar from './components/NavBar'
import MainPage from './pages/MainPage'
import { LoginPage } from './pages/LoginPage'
import { SignUpPage } from './pages/SignUpPage'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/Profile'
import { Box } from '@mui/material'
import { auth } from './firebaseConfig'

export const App = () => {
  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState(1)
  return (
  <Box >
    <Router>
    <NavBar search={search} setPage={setPage} setSearch={setSearch} />
      <Routes>
        {!auth.currentUser && <Route path='/login' element={<LoginPage />} />}
        {!auth.currentUser && <Route path='/sign-up' element={<SignUpPage />} />}
        <Route path='/profile' element = {<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/' element={<MainPage page={page} setPage={setPage} search={search}/>} />
        <Route path='/*' element={<Navigate to='/'/>} />
        </Routes>
    </Router>
  </Box>
  )
}
