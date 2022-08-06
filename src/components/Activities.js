import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import activityActions from '../redux/actions/activityActions'


export default function Activities(props) {
  const dispatch = useDispatch()
  var id=props.id
  var activities= []
  const [add,setAdd]=useState("") 
  useEffect(()=>{
  dispatch(activityActions.findActFromTin(props.id))
  .then (res => {setAdd(res.response.res)})
  },{id})
    activities=add //.res no quiere, maloo
  return (
    <Card className='cardActivity'  sx={{ maxWidth: 345 }}>
      {activities?.length > 0 ? activities.map(a=>{
        return(
          <CardActionArea key={a._id}>
         <CardMedia
           component="img"
           height="140"
           image={a.imgActivity}
           alt="green iguana"
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             {a.nameActivity}
           </Typography>
           {/* <Typography variant="body2" color="text.secondary">
             {a
           </Typography> */}
         </CardContent>
       </CardActionArea>
        )
         
      }): <Typography sx={{fontSize:"2rem",margin:"5rem"}}>NO ACTIVITIES YET!</Typography>

      }
     
    </Card>
  );
}