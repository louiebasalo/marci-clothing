
import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';

import { rootReducer } from './root-reducer';

//root-reducer   -- the combination of all of our reducers, itts kinda like the one big reducer

const persistConfig = {
    key: 'root',
    storage,   //casting a variable as a keyname
    blacklist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);  //generate the store

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);


//adding this spaces just to test git contribution calendar