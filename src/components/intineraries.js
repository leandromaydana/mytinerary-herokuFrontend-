import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import itinerariesActions from '../redux/actions/intinerariesAction';
import itinerariesReducer from '../redux/reducers/intinerariesReducer';
import NotTinerary from './notTinerary';
import Activities from './Activities';
import LikeButton from './likeButton';
import { useState } from 'react';
import Comments from './comments';
import Comment from './Comment';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItineraryCard(data, props) {//

const [reload,setReload] = useState(false)//
 const {id} =useParams()
 const dispatch =useDispatch()
 useEffect(()=>{
    dispatch(itinerariesActions.getItinerariesByCity(id))//
 },[reload]) //


 const itinerary = useSelector(store=> store.itinerariesReducer.getItinerariesFromCity)

 const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    itinerary.length > 0 ?
    itinerary.map((itinerary,index)=> <Box key={index} sx={{display:'flex ', width:'70%', flexDirection:'row'}}>
            
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '1',
            height: '100%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(32, 35, 37)',
            
            color: 'white',
            padding: '10px',
            marginTop: '2rem',
            width: '100%'}}>
                
                <Box sx={{display:'flex', flexDirection:'column-reverse' , height:'40vh',  margin: '2rem' }}>
                    <Typography>{itinerary.user}</Typography>
            <CardMedia 
                component="img"                
                src= {itinerary.image }/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h3'>{itinerary.name}</Typography>
            <Typography variant='h5'>By: {itinerary.person}</Typography>
            <Typography variant='subtitle1'>Description: {itinerary.description}</Typography>
            <Typography variant='subtitle2'>Price: {itinerary.price}, duration: {itinerary.duration}</Typography>
            <Typography variant='subtitle2'>Hashtags: {itinerary.hashtags}</Typography>
            <CardActions disableSpacing>
                <LikeButton itinerary={itinerary} reload={reload} setReload={setReload} />
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', marginTop: '5px', marginBottom: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}}/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{width: '80%'}} className='width60'>
        <CardContent className='activitiescard'  >
          <Activities id = {itinerary._id} />
          <Typography variant="h4" className='fredokaFont' sx={{margin: '16px', padding: '8px', textAlign: 'center', color: 'black', backgroundColor: '#ffa000'}}>comments:</Typography>
          {itinerary.comments.map((comment) =>(
            <Comments itinerary={itinerary} reload={reload} setReload={setReload} idComment={comment._id} key={comment._id} comment={comment} />))}
            <Comment itinerary={itinerary} reload={reload} setReload={setReload} user={itinerary.user} />      
        </CardContent>
      </Collapse>
      </Box>
    </Card>
</Box>): <NotTinerary/>
    );
}