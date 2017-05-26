import * as types from "../actions/actionTypes";
// import _ from 'lodash';

const initialState = {
  products: [],
  isFetching: false
};

const productReducer = function(state = initialState, action) {
  switch (action.type) {
    case types.GET_PRODUCTS_SUCCESS:
      return { ...state, isFetching: false, products: action.products };
    case types.REQUEST_PRODUCTS:
      return { ...state, isFetching: true };
    default:
      return state;
  }
};

export default productReducer;
