import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useParams} from 'react-router-dom'
import '../styles/App.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
import { useSelector } from 'react-redux';
import ItineraryCard from './intineraries';
import ButtonsCities from './ButtonsCities';

export default function CitiesDetails() {
    const {id}=useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(citiesActions.getOneCity(id))
        // eslint-disable-next-line
    }, [id])
        
    const card = useSelector(store => store.citiesReducer.oneCity)
    return (
        <>
        <div key={card._id} className='details'>
        <Card className='cardDetails' key='index' sx={{maxWidth: "200vh"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="350"
                    image={card.image}
                    alt={card.name}
                />
                <CardContent>
                    <Typography style={{color: "white"}} gutterBottom variant="h5" component="div">
                        {card.name}
                        
                    </Typography>
                    <p style={{color: "white"}}>{card.description}</p>
                    
              </CardContent>
                <ButtonsCities/>
            </CardActionArea>
        </Card>
        
        
        </div>  
        <div className='intinerarios'>
        <ItineraryCard/>
        </div>
        </>
        )
    ;
}

