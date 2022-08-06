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
import usersActions from '../redux/actions/userActions';
import GoogleSignIn from '../components/GoogleSignIn';
import {Link as LinkRouter} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

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

export default function SignIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch() 
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event)
    // const data = new FormData(event.currentTarget);
    const logedUser = {
      mail: event.target[0].value,
      password: event.target[2].value,
      from: "form-signup"
  }
  await dispatch(usersActions.signInUser(logedUser))
  const token = localStorage.getItem('token')//recupero el token de local store si esta seteado
  if (token) {// si esta el token lo redirecciono al Navigate
      console.log('navigate')
      navigate("/")
    }
  };
  

    
  
  


  return (
    <div className='SignInContainer'>
    <ThemeProvider theme={theme}>
      <Container className='cardSignIn' component="main" maxWidth="xs">
        <CssBaseline />
        <Box
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
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="mail"
              label="Email Address"
              name="mail"
              autoComplete="mail"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,  bgcolor: '#e65100' }}
            >
              Log In
            </Button>
            <Grid sx={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}><GoogleSignIn/></Grid>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  <h5>Forgot password?</h5>
                </Link>
              </Grid>
              <Grid item>
              <LinkRouter to={'../SignUp'}  href="#" variant="body2">
                 <h5>Don't have an account? Sign Up</h5>
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




