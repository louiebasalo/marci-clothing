
import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
    key: 'root',
    storage,   //casting a variable as a keyname
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);  //generate the store

export const persistor = persistStore(store);