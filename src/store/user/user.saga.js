
import { takeLatest, all, call, put} from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types';

import { signInSuccess, signInFailed } from './user.action';

import { getCurrentUser } from '../../utils/firebase/firebase.utils';



export function* onCheckUserSession(){
    try{
        yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION);
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return;
    } catch (error) {

    }
    
}



export function* userSagas() {
    yield all([]);
}