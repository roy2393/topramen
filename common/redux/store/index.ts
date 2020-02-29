import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import RamenReducer from '../reducers/';
import {RamenStateType} from '../actions/types';

export type StoreType = {
  ramens: RamenStateType,
};

const reducers = {
  ramens: RamenReducer,
};

const combinedReducers = combineReducers(reducers);

export type AppState = ReturnType<typeof combinedReducers>;

export default createStore(
  combinedReducers,
  applyMiddleware(logger, thunkMiddleware),
);
