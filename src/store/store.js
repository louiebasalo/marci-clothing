
import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

//root-reducer   -- the combination of all of our reducers, itts kinda like the one big reducer

const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type){
        return next(action);
    }

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action);

    console.log('next state: ', store.getState());
}

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);  //generate the store