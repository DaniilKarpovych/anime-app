
import React, { FC, ReactFragment } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { auth } from '../firebaseConfig'

const PrivateRoute:FC<ReactFragment> = ({ children }) => {
  const login = !!auth.currentUser
  if (login) {
    return <Outlet />
  } else {
    return <Navigate to='/sign-up' />
  }
}

export default PrivateRoute
