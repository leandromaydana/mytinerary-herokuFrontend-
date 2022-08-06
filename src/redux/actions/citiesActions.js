import axios from "axios";
import apiUrl from "../../url"

const citiesActions = {

    getCities: () => {
        return async (dispatch, getState) => {
            const res = await axios.get(apiUrl+'api/cities')
            dispatch({type: "GETCITIES", payload:res.data.response.cities})
        }
    },
    getOneCity: (id) => {
        return async(dispatch,getstate) => {
            // eslint-disable-next-line
            const res = await axios. get(apiUrl+`api/cities/${id}`)
            dispatch ({type: 'GET_ONE_CITY', payload:res.data.response})
        }
    },

    filterCities: (input) => {
        return async (dispatch, getState) => {
            dispatch ({type:"FILTERCITIES", payload: input})
        }
    }
}

export default citiesActions