import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebaseConfig'
import { toast } from 'react-toastify'

export const SignUpPage = () => {
  const navigate = useNavigate()
  const [credential, setCredentials] = useState({ email: '', password: '', firstName: '', lastName: '' })
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((state) => {
      return { ...state, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const { email, password, firstName, lastName } = credential
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      updateProfile(userCredential.user, {
        displayName: `${firstName + lastName}`
      })

      toast.success('You are signed-up')
      navigate('/')
    } catch (e:any) {
      toast.warn(e.message)
    }
  }

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={onChangeHandler}
                  value={credential.firstName}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={onChangeHandler}
                  value={credential.lastName}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={onChangeHandler}
                  value={credential.email}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e:any) => setCredentials((state:any) => ({ ...state, password: e.target.value }))}
                  value={credential.password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  )
}
