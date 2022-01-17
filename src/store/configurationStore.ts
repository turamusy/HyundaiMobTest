import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {IRootState} from '../interface/IRootState';
import {list} from '../reducers/list.reducer';

const reducer = combineReducers<IRootState>({
  list: list.reducer,
});

const store = configureStore({
  reducer,
});

export default store;
