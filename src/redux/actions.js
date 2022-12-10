import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actionTypes";

export function addFavorite(character) {
    return {
        type: ADD_FAVORITE,
        payload: character
    }
}

export function removeFavorite(id) {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    }
}