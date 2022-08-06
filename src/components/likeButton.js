import React, {useEffect, useState} from 'react'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import {Typography} from '@mui/material'
import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/intinerariesAction'

function LikeButton(props) {
    const [likes,setLikes] = useState(props.itinerary.likes)
    const [reload,setReload] = useState(false)

    useEffect(() => {
       itineraryData()
    }, [props.reload])
    async function itineraryData(){
    await props.getOneItinerary(props.itinerary._id)
    .then(response => setLikes(response.data.response.likes))
}
    async function toLike() {
        //console.log(props.tinDat._id);
        await props.likeDislike(props.itinerary._id)
        props.setReload(!props.reload)
    }


    return (
        <>
            {props.user ?
                <IconButton onClick={toLike} aria-label="cart">
                {likes.includes(props.user.id) ?
                    <FavoriteIcon sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', margin: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}}/> :
                    <FavoriteBorderIcon sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', margin: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}}/>}
                    <Typography sx={{color: 'black', paddingLeft: '5px'}}>{likes.length} likes</Typography>
                </IconButton> :
                <IconButton aria-label="cart">
                    <FavoriteBorderIcon sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', margin: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}}/>
                    <Typography sx={{color: 'black', paddingLeft: '5px'}}>{likes.length} likes</Typography>
                </IconButton>
            }
        </>
    )
}

const mapDispatchToProps = {
    likeDislike: itinerariesActions.likeDislike,
    getOneItinerary: itinerariesActions.getOneItinerary
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)