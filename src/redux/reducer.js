import { ADD_FAVORITE, REMOVE_FAVORITE } from './actionTypes'

const initialState = {
    myFavorites: []
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.push(action.payload)
            };
        case REMOVE_FAVORITE:
            const filtered = state.myFavorites.filter(character=> character.id !== action.payload )
            return {
                ...state,
                myFavorites: filtered
            };
        default:
            return state;
    }
}