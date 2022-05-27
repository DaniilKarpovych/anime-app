
import React, { FC, ReactFragment } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute:FC<ReactFragment> = ({ children }) => {
  const login = true
  if (login) {
    return <Outlet />
  } else {
    return <Navigate to='/sign-up' />
  }
}

export default PrivateRoute
