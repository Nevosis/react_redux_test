import * as types from "../actions/actionTypes";

const initialState = {
  products: [],
  isFetching: false,
  isAdding: false
};

const productReducer = function(state = initialState, action) {
  switch (action.type) {
    case types.GET_PRODUCTS_SUCCESS:
      return { ...state, isFetching: false, products: action.products };
    case types.REQUEST_PRODUCTS:
      return { ...state, isFetching: true };
    case types.REQUEST_ADD_PRODUCT:
      return { ...state, isAdding: true };
    case types.ADD_PRODUCT_SUCCESS:
      return { ...state, isAdding: false, products: action.products };
    case types.REQUEST_REMOVE_PRODUCT:
      return { ...state};
    case types.REMOVE_PRODUCT_SUCCESS:
      return { ...state, products: action.products };
    default:
      return state;
  }
};

export default productReducer;