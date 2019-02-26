import Immutable from 'seamless-immutable'
import {SET_LIKES} from "../types/character";
import {DELETE_LIKES} from "../types/character";
import {RESET_LIKES} from "../types/character";

const  defaultState = Immutable({
   likes : 0
});

export default function  character(state = defaultState, action = {}) {
    switch (action.type) {
        case SET_LIKES:
            return state.merge({
                likes: action.payload,
            });

        case DELETE_LIKES:
            return state.merge({
                likes: action.payload,
            });

        case RESET_LIKES:
            return state.merge({
                likes: action.payload,
            });
        default:
        return state
    }
}