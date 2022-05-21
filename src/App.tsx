import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import MainPage from './pages/MainPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'

export const App = () => {
  return (
  <main>
  <NavBar />
  <Router>
  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/sigh-in' element={<SignInPage />} />
    <Route path='/sigh-up' element={<SignUpPage />} />
  </Routes>
  </Router>
  </main>
  )
}
