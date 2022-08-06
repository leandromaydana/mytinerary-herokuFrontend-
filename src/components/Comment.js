import React from "react";
import {useEffect, useState} from 'react'
import {Box, Typography} from '@mui/material'
import {Link as LinkRouter} from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/intinerariesAction';


const Comment = (props)=>{
    const [comments,setComments] = useState([]) 
    const [inputText,setInputText] = useState("") 
    const [modifyCom,setModifyCom] = useState("") 
    const [newButton,setNewButton] = useState(false) 
    async function toAdd(event) {
        const commentData = {
            tinId: props.itinerary._id,
            comments: {
                comment: inputText,
                userId: props.user.id
            }
        }
        await props.addComment(commentData)
        setInputText("")
        props.setReload(!props.reload)
    }
    return (
        <>
        {props.user ?
                (<Box className="contendeorComentarios" sx={{margin: '16px', padding: '8px', display: 'flex', color: 'white', backgroundColor: '#ffa000'}}>
                    <div className='divImgComment2'>
                        <img className="onlyimgComment2" alt={props.user.nameUser} src={props.user.photoUser} />
                    </div>
                    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Box sx={{width: '100%', display: 'flex', paddingLeft: '8px', paddingRigth: '8px'}}>
                            <textarea rows='2' onChange={(event) => setInputText(event.target.value)} value={inputText} className='myInputforComment fredokaFont' />
                            <AddIcon onClick={toAdd} sx={{bgcolor: '#ffa000', '&:hover': {bgcolor: '#ffa000'}, padding: '5px', margin: '5px', marginRigth: '0', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}} />
                        </Box>
                    </Box>
                </Box>
                ) : (
                    <LinkRouter to={'/login'} className='anchor festiveFont violetShadows'>log in to add a comment!</LinkRouter>
                )
            }
        </>
    )
} 

const mapDispatchToProps = {
    addComment: itinerariesActions.addComment
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Comment)