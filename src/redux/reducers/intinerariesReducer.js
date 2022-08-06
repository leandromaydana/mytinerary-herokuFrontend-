const initialState = {
    itineraries: [],  //misma estructura que antes pero aplicado solo a los itinerarios
    getOneItinerary: {},
    getItinerariesFromCity: []
}

const itinerariesReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GETITINERARIES": //mismo que el de actions, aqui se recibe
            return {
                ...state,
                itineraries: action.payload
            }
        case "GETONEITINERARY": //nombre de casos que coincide con actions
            return {
                ...state,
                getOneItinerary: action.payload
            }
        case "GETITINERARIESBYCITY":
            return {
                ...state,
                getItinerariesFromCity: action.payload
            }
        default:
            return state
    }
}

export default itinerariesReducer