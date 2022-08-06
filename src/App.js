import './styles/App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Cities from './Pages/Cities'
import CitiesDetails from './components/CitiesDetails';
import ScrollToTop from "react-scroll-to-top";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import citiesActions from './redux/actions/citiesActions';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import MySnackBar from './components/MySnackBar';
import userActions from './redux/actions/userActions';
import {connect} from 'react-redux'

function App(props) {
    
  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(citiesActions.getCities())        
},[])

useEffect(() => {
  if(localStorage.getItem('token')!== null) {
      const token = localStorage.getItem("token")
      dispatch(userActions.verifyToken(token))
  }
},[])
  
  return (
      <div>
      <Nav className='Nav'></Nav>
      <Routes>
        <Route path= '/'element={<Home/>}/>
        <Route path= '/Home'element={<Home/>}/>
        {props.user &&<Route path= '/Cities'element={<Cities/>}/>}
       <Route path='/CitiesDetails/:id' element={<CitiesDetails/>}/>
       {!props.user && <Route path='/SignUp' element={<SignUp/>}/>} 
       {!props.user &&  <Route path='/SignIn' element={<SignIn/>}/>}
      </Routes>
      <ScrollToTop
        style={{backgroundColor:"#272727", color:"#e65100"}}
          smooth
          component={< ArrowCircleUpIcon/>}
      />
      <MySnackBar/>
      <Footer className='footer' ></Footer>
    </div>
  );
}

const mapDispatchToProps = {
  verifyToken:userActions.verifyToken,
}

const mapStateToProps = (state) => {
  return {
    user : state.userReducer.user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
