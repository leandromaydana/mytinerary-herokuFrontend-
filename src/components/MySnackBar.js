import React from 'react'
import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import {connect} from 'react-redux'
import {useDispatch} from 'react-redux'

function MySnackBar(props) {
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch({
            type: 'message',
            payload: {view: false, message: '', success: false}
        })
    }
    const action = (
        <Box sx={{
            width: '100%',
            backgroundColor: props.snackbar.success ? 'green':'red',
            color: 'white',
            borderRadius: '4px',
            padding: '4px',
            fontWeight: '400'}}>
            {(typeof props.snackbar.message) === "string" ?
                (<p>{props.snackbar.message}</p>) :
                <div>{props.snackbar.message.map((message,index) =><p key={index}>{message.message}</p>)}</div>
            }

        </Box>
    )

    return (
        <Snackbar
            open={props.snackbar.view}
            autoHideDuration={5000}
            onClose={handleClose}
            action={action}
            message={
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            } 
        />
    )
}

const mapStateToProps = (state) => {
    return {
        snackbar: state.userReducer.snackbar,
    }
}

export default connect(mapStateToProps, null)(MySnackBar)