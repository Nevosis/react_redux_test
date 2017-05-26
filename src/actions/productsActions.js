import * as types from '../actions/actionTypes';

export const getProductsSuccess = products => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    products
  };
}


export const requestProducts = () => {
  return {
    type: types.REQUEST_PRODUCTS
  }
}
