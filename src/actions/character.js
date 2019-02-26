import {SET_LIKES} from '../types/character'
import {DELETE_LIKES} from '../types/character'
import {RESET_LIKES} from '../types/character'

export  const setLikes = payload => ({
   type: SET_LIKES,
   payload,
});
export  const deleteLikes = payload => ({
   type: DELETE_LIKES,
   payload,
});
export  const resetLikes = payload => ({
   type: RESET_LIKES,
   payload,
});

export const increaseLikes = () => (dispatch, getState) => {
    const { likes } = getState().character;
    const totalLikes = likes +1;
    dispatch(setLikes(totalLikes))
};

export const decreaseLikes = () => (dispatch, getState) => {
    const { likes } = getState().character;
    const totalLikes = likes -1;
    dispatch(deleteLikes(totalLikes))
};

export const ceroLikes = () => (dispatch) => {
    const totalLikes =0;
    dispatch(resetLikes(totalLikes))
};