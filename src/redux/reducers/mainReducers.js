import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./intinerariesReducer";
import userReducer from '../reducers/userReducer';


const mainReducer = combineReducers({
   citiesReducer,
   itinerariesReducer,
   userReducer
})

export default mainReducer
