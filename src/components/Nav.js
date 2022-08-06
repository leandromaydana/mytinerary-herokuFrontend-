import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../images/logo.png';
import {Link as LinkRouter} from "react-router-dom";
import SignOut from './SignOut';
import {connect} from 'react-redux';
import PersonIcon from '@mui/icons-material/Person'

const navBarOptions=[{to:'/home',name:'Home'},{to:'/cities', name:'Cities'}]
const settings = [{to:'/SignIn' ,name:'Log in'},{to:'/SignUp', name:'Sign up'}];

const Nav = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{height:'6rem', padding:'0.5rem' }} position="fixed" sx={{ backgroundColor:"#fbbe07",}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
          <img src={logo} alt="imagen logo" className='logo' />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                {navBarOptions.map((element,index) => (
               <LinkRouter  key={index} onClick={handleCloseNavMenu} to={element.to}>
                <MenuItem >
                  <Typography textAlign="center">{element.name}</Typography>
                </MenuItem>
                </LinkRouter>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, width:"100vw", justifyContent:"center" }}>
          <img src={logo} alt="imagen logo" className='logo' />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navBarOptions.map((element,index) => (
              <LinkRouter key={index}
              onClick={handleCloseNavMenu}
               to={element.to}>
                <Button sx={{ my: 2.5, color: 'white', display: 'block'}}>
                {element.name}
              </Button></LinkRouter>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {props.user ? 
              <Avatar className='avatar' src={props.user.photoUser} sx={{width: '40px', height: '40px'}}></Avatar> :
              <PersonIcon />
              }
              </IconButton>
    
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {props.user ?
               <SignOut handleCloseUserMenu={handleCloseUserMenu} /> :
              settings.map((element,index) => (
                <LinkRouter  key={index} onClick={handleCloseUserMenu}  to={element.to} >
                <MenuItem>
                  <Typography textAlign="center">{element.name}</Typography>
                </MenuItem>
                </LinkRouter>
                
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  }
}
export default connect(mapStateToProps, false)(Nav)

