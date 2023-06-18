
import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

//root-reducer   -- the combination of all of our reducers, itts kinda like the one big reducer