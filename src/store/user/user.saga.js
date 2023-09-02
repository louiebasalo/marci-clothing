
import { takeLatest, all, call, put} from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types';

import { signInSuccess, 
        signInFailed, 
        signOutUserSuccess, 
        signOutUserFailed,
        signUpSuccess,
        signUpFailed
    } from './user.action';

import { createUserDocumentFromAuth, 
        getCurrentUser, 
        signInWithGooglePopup,
        signInAuthUserWithEmailAndPassword, 
        signOutUser,
        createAuthUserWithEmailAndPassword
    } from '../../utils/firebase/firebase.utils';


//generator functions

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try{
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        yield put(signInSuccess({ id:userSnapshot.id, ...userSnapshot.data()}))
        console.log(userSnapshot);
        console.log(userSnapshot.data);
    }catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signInWithGoogle(){
    try{
       const {user} = yield call(signInWithGooglePopup);
       yield call(getSnapshotFromUserAuth, user);

    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signInWithEmail({ payload: {email, password}}){
    try{
        const { user } = yield call(
            signInAuthUserWithEmailAndPassword,
            email, 
            password
        );
        yield call(getSnapshotFromUserAuth, user);
    }catch(error){
        yield put(signInFailed(error));
    }
}

export function* signOutCurrentUser(){
    try{
        console.log('eeee')
        yield call(signOutUser);
        yield put(signOutUserSuccess());
    }catch (error) {
        yield put(signOutUserFailed(error))
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error));
    } 
    
}

export function* signUp({payload: {email, password, displayName}}) {
    try{
        const { user } = yield call(
            createAuthUserWithEmailAndPassword, 
            email, 
            password);
        yield put(signUpSuccess(user, {displayName}));
    } catch(error){
        yield put(signUpFailed(error));
    }
}

export function* signInAfterSignUp({payload: {user, additionalDetails}}) {
    yield call(getSnapshotFromUserAuth, user, additionalDetails);
}


//entry point sagas 

export function* onGoogleSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutUserStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_USER_START, signOutCurrentUser);
}

export function* onSignUpStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp );
}

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignOutUserStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
    ]);
}