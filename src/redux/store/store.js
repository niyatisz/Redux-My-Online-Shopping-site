// store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import productReducer from '../reducer/Reducer';


const store = createStore(productReducer, applyMiddleware(thunk));

export default store;
