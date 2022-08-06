import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux'
import usersActions from '../redux/actions/userActions' 
import { useState } from 'react';
import GoogleSignUp from '../components/GoogleSignUp';
import CountrySelect from '../components/CountrySelect';
import {Link as LinkRouter} from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="#e65100" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
      MyTinerary
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export default function SignUp() {
const [name, setName] = useState("");
const [lastName, setLastName] = useState("");
const [photoUser, setPhotoUser] = useState("");
const [mail, setMail] = useState("");
const [password, setPassword] = useState("");
//eslint-disable-next-line
const [from, setFrom] = useState("");



  const dispatch = useDispatch() 

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    
    const userData = {
        nameUser: name,
        lastNameUser: lastName,
        photoUser: photoUser,
        mail: mail,
        password: password,
        from: "signUpForm",
        country:event.target[6].value
    }
    dispatch(usersActions.signUpUser(userData))
    setName("")
    setLastName("")
    setPhotoUser("")
    setMail("")
    setPassword("")
    setFrom("")
}

  return (
    <div className='SignUpContainer'>
    <ThemeProvider theme={theme}>
      <Container className='cardSignUp' component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="form-login"
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#e65100' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField 
                onChange={e=> setName(e.target.value)}
                value={name}
                  autoComplete="given-name"
                  name="nameUser"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={e=> setLastName(e.target.value)}
                value={lastName}
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
                onChange={e=> setMail(e.target.value)}
                value={mail}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CountrySelect/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={e=> setPhotoUser(e.target.value)}
                value={photoUser}
                  required
                  fullWidth
                  id="photoUser"
                  label="Photo User"
                  name="photoUser"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={e=> setPassword(e.target.value)}
                value={password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,  bgcolor: '#e65100' }}
            >
              Sign Up
            </Button>
            <Grid sx={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}> <GoogleSignUp/></Grid>
            <Grid container justifyContent="center" >
              <Grid item>
              <LinkRouter to={'../SignIn'}  href="#" variant="body2">
                  <h5>Already have an account? Log in</h5>
                </LinkRouter>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}