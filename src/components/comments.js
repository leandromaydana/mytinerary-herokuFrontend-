import React, {useEffect, useState} from 'react'
import {Box, Typography} from '@mui/material'
import {Link as LinkRouter} from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/intinerariesAction';


function Comments(props) {
    const [comments,setComments] = useState([]) 
    const [inputText,setInputText] = useState("") 
    const [modifyCom,setModifyCom] = useState("") 
    const [newButton,setNewButton] = useState(false) 
    // const dispatch = useDispatch()

    
    async function itineraryData(){
      await props.getOneItinerary(props.itinerary._Id)
            .then(response => console.log(response))
            // console.log(response)
    }

    
    async function toModify(commentId) {
        console.log(modifyCom)
        const commentData = {
            commentId: commentId,
            comments: {
                comment: modifyCom,
                userId: props.user.id
            }
        }
        await props.modifyComment(commentData, commentId)
        console.log(commentData)
        setNewButton(false)
        props.setReload(!props.reload)
    }

    function toChangeInputs(event) {
        setNewButton(true)
    }
    
    async function toDelete(id) {
        await props.deleteComment(id)
        props.setReload(!props.reload)
        console.log(id)
    }
    

    // console.log(props.itinerary.comments.id)
    // async function toDelete(id) {
    // const awaitDelete = props.deleteComment(id) 
    // console.log(id) 
    // if (awaitDelete.data.success === true){
    //     props.setReload(!props.reload)
    // } 
    // }
    
return (
        <>
                {(props.user ?
                    (props.user.id != props.comment.userId ? 
                        <Box  key={props.comment._id} sx={{margin: '16px', padding: '8px',  display: 'flex', color: 'white', backgroundColor: '#ffa000'}}>
                            <div className='divImgComment'>
                                <img className="onlyimgComment" alt={props.comment.userId.nameUser} src={props.comment.userId.photoUser} />
                            </div>
                            <Box sx={{paddingLeft: '8px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                                <Typography variant='subtitle1' sx={{width: '100%', padding: '8px', paddingTop: '0'}} className='fredokaFont smallT'>{props.comment.userId.mail}</Typography>
                                <Typography variant="subtitle2" sx={{width: '100%', display: 'flex', padding: '8px',  color: 'black', backgroundColor: ''}} className='fredokaFont'>{props.comment.comment}</Typography>
                            </Box>
                        </Box> :
                        <Box key={props.comment._id} sx={{margin: '16px', padding: '8px',  display: 'flex', color: 'white', backgroundColor: '#ffa000'}}>
                            <div className='divImgComment'>
                                <img className="onlyimgComment" alt={props.comment.userId.nameUser} src={props.comment.userId.photoUser} />
                            </div>
                            <Box sx={{paddingLeft: '8px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                                <Typography variant='h6' sx={{width: '100%', color: 'white'}} className='fredokaFont smallT'>{props.comment.userId.mail}</Typography>
                                <Box sx={{width: '100%', display: 'flex', paddingTop: '8px', paddingLeft: '0'}}>
                                    {props.user.id == props.comment.userId ? //newButton === comment.userId._id?
                                    <>
                                        <textarea rows='2' onChange={(event) => setModifyCom(event.target.value)} defaultValue={props.comment.comment} className='myInputforComment fredokaFont' />
                                        <EditIcon id={props.comment._id} onClick={()=>toModify(props.idComment)} sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', margin: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}} />
                                        <DeleteIcon id={props.comment._id} onClick={()=>toDelete(props.idComment)} sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', marginTop: '5px', marginBottom: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}} />
                                    </> : <>
                                        {/* <textarea rows='2' disabled onChange={(event) => setModifyCom(event.target.value)} defaultValue={comment.comment} className='myInputforComment fredokaFont' />
                                        <EditIcon id={comment._id} onClick={toChangeInputs} sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', margin: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}} /> */}
                                    </>
                                    }
                                    
                                </Box>
                            </Box>
                        </Box>
                    ) : 
                    (
                        <Box key={props.comment._id} sx={{margin: '16px', padding: '8px',  display: 'flex', color: 'white', backgroundColor: 'rgb(0, 73, 48)'}}>
                            <div className='divImgComment'>
                                <img className="onlyimgComment" alt={props.comment.userId.nameUser} src={props.comment.userId.photoUser} />
                            </div>
                            <Box sx={{paddingLeft: '8px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                                <Typography variant='h6' sx={{width: '100%', padding: '8px', paddingTop: '0'}} className='fredokaFont smallT'>{props.comment.userId.mail}</Typography>
                                <Typography variant="subtitle2" sx={{width: '100%', display: 'flex', padding: '8px',  color: 'black', backgroundColor: 'rgb(126, 196, 165)'}} className='fredokaFont'>{props.comment.comment}</Typography>
                            </Box>
                        </Box> 
                    )
                )
                    }
            
        </>
    )
}


const mapDispatchToProps = {
    addComment: itinerariesActions.addComment,
    modifyComment: itinerariesActions.modifyComment,
    deleteComment: itinerariesActions.deleteComment,
    getOneItinerary: itinerariesActions.getOneItinerary,
    getItinerariesByCity: itinerariesActions.getItinerariesByCity
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)



