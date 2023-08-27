
import { takeLatest, all, call, put } from "redux-saga/effects"; //Saga's four base effect generators

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";


export function* fetchCategoriesAsync(){
    try{
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}

//this saga listens to category.action.js -> FETCH_CATEGORIES_START
export function* onFetchCategories(){
    //takeLatest get 2 arguments, 1st is the action type that we want to respond to, the 2nd argument is what you actually want to happen
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync) //takeLatest is when we received action and get the latest one
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)]); // run everything inside, and only complete when everthing is done.
}