import axios from "axios"
import apiUrl from "../../url"


const userActions ={

 signUpUser: (userData) => {
    return async (dispatch, getState) => {
        const res = await axios.post(apiUrl+'api/auth/signUp', {...userData})
        console.log(res)
        dispatch({
            type: 'message',
            payload: {
                view: true,
                message: res.data.message,
                success: res.data.success
            }
        })
    }
},
signInUser: (userLogin) => {
    console.log(userLogin)
    return async (dispatch, getState) => {
        try{ 
        const res = await axios.post(apiUrl+'api/auth/signIn', {...userLogin})
        console.log(res)

        if(res.data.success) {
            localStorage.setItem('token',res.data.response.token)
            console.log(localStorage.getItem('token'))
            dispatch({
                type: 'user',
                payload: res.data.response
            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        } else {
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        }
        return res
            } catch(error) {
                console.log(error)
            }
    } 
},
signOut: (mail) => {
    console.log('signOut mail')
    console.log(mail)
    return async (dispatch, getState) => {
        await axios.post(apiUrl+'api/auth/signOut',{mail})
        localStorage.removeItem('token')
        dispatch({
            type: 'user',
            payload: null
        })
    }
},

verifyToken: (token) => {
    return async (dispatch, getState) => {
        const user = await axios.get(apiUrl+'api/auth/loginToken', {headers: {'Authorization': 'Bearer '+ token}} )
        if (user.data.success) {
            dispatch({
                type: 'user',
                payload: user.data.response
            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: user.data.message,
                    success: user.data.success
                }
            })
        } else {
            localStorage.removeItem('token')
        }
    }
}

}

export default userActions