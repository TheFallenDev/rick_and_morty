import { ADD_FAVORITE, REMOVE_FAVORITE } from './actionTypes'

const initialState = {
    myFavorites: []
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case ADD_FAVORITE:
            console.log(state)
            return {
                ...state,
                myFavorites: [...state.myFavorites,action.payload]
            };
        case REMOVE_FAVORITE:
            console.log(state.myFavorites)
            const filtered = state.myFavorites.filter(character=> character.id !== action.payload )
            return {
                ...state,
                myFavorites: filtered
            };
        default:
            return {...state};
    }
}