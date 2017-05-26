import { combineReducers } from 'redux';
import productsReducer from './productsReducer';

// Combine Reducers
var reducers = combineReducers({
	    productsState: productsReducer
});

export default reducers;
