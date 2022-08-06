import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions'
import { useNavigate } from 'react-router-dom';


export default function GoogleSignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate()


    async function handleCallbackResponse(response) {
        console.log(response.credential);
        let userObject = jwt_decode(response.credential);
        console.log(userObject);
        await dispatch(userActions.signInUser({
            mail: userObject.email, 
            password: userObject.sub, 
            from: 'google'
        })) 
        const token = localStorage.getItem('token')
        if (token) {
            console.log('navigate')
            navigate("/")
          }
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id:'576765518712-b5s470ld7o2mggb6jnf32e8f8j8vumsc.apps.googleusercontent.com',
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: "outline", size: "medium", locale:'en' }
        )
    });

    return (
        <div>
            <div id='buttonDiv'></div>
        </div>
    )
}