import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '../components/Card'
import Notfound from '../components/Notfound';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
import { useSelector } from 'react-redux';

function Cities(props) {

    const [search, setSearch] = React.useState('')
    const dispatch = useDispatch() 

    useEffect (() => { 
        dispatch(citiesActions.filterCities(search))
        //eslint-disable-next-line
    },[search]);

    const city = useSelector(store => store.citiesReducer.filter)
   
    return (
        
        <div className='contenedor-cities'>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', paddingTop:'8rem' }}>
            <div className='searchConteiner'>
            <input className='search' onKeyUp={(e) => { setSearch(e.target.value) }} placeholder='Search City' type='text'></input>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-search" viewBox="0 0 16 16">
           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg></div>
        </Box>
        

    <Box>
    {city?.length > 0 ? (<Card filterCard={city}/>) : (<Notfound/>)}
    </Box>
    </div>
    
    )

}
export default Cities