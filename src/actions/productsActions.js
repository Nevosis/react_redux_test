import * as types from "../actions/actionTypes";

export const requestProducts = () => {
  return {
    type: types.REQUEST_PRODUCTS
  };
};

export const requestAddProduct = () => {
  return {
    type: types.REQUEST_ADD_PRODUCT
  };
};

export const addProductSuccess = products => {
  return {
    type: types.ADD_PRODUCT_SUCCESS,
    products
  };
};

export const getProductsSuccess = products => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    products
  };
};
