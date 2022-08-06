import axios from 'axios';
import apiUrl from "../../url"

const activityActions = {

    getActivities: () => {
        return async(dispatch, getState) => {
            const res = await axios.get(apiUrl+`api/activities`)
            dispatch({type:'GET_ACTIVITIES', payload:res.data.response.activities})
        }
    },

    uploadActivity: (itinerary,activity,actPhoto)=>{
        return async(dispatch,getState)=>{
            const answer = await axios.post(apiUrl+'api/activities',{itinerary,activity,actPhoto})
            dispatch({type:'UPD_ACTIVITY', payload:answer.data.response.activities})
        }
    },

    deleteAct: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.delete(apiUrl+`api/activities/${id}`)
                dispatch({type:'DEL_ACTIVITY', payload:answer.data.response.activities})
            }catch (err) {
                console.log(err)
            }
        }
    },

    oneActivity: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.get(apiUrl+`api/activities/${id}`)
                dispatch({type:'ONE_ACTIVITY', payload:answer.data.response.activities})
            }catch (err) {
                console.log(err)
            }
        }
    },

    findActFromTin: (id) => {
        return async () => {
            try {
                let res = await axios.get(`http://localhost:4000/api/getactivitybyintineray/${id}`)
                return { //NO DESPACHA! RETURNA PARA SETEAR UN HOOK COMÚN
                    success: true, response: res.data
                }    
            }
            catch (error) {
                return {
                    success: false, response: error.messagge
                }
            }
        }
    }

}

export default activityActions