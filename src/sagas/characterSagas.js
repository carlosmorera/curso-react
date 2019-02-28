import {call, put} from 'redux-saga/effects';
import {fetchCharacterSucces, fetchedCharacterError} from '../actions/character';
import api from '../api';

export function* fetchCharacterSaga(action) {
    try {
        const characters = yield call(
            api.characters.fetchAll
        );
        yield put(fetchCharacterSucces(characters))
    } catch (err) {
        yield put(fetchedCharacterError(err.respose))
    }
}