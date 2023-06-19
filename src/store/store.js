
import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

//root-reducer   -- the combination of all of our reducers, itts kinda like the one big reducer

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);