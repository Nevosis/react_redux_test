import * as types from "../actions/actionTypes";
import log from "../utils/log";

export const requestProducts = () => {
  log.info("[PRODUCTS ACTION] REQUEST_PRODUCTS");
  return {
    type: types.REQUEST_PRODUCTS
  };
};

export const requestAddProduct = () => {
  log.info("[PRODUCTS ACTION] REQUEST_ADD_PRODUCT");
  return {
    type: types.REQUEST_ADD_PRODUCT
  };
};

export const addProductSuccess = products => {
  log.info("[PRODUCTS ACTION] ADD_PRODUCT_SUCCESS", products);
  return {
    type: types.ADD_PRODUCT_SUCCESS,
    products
  };
};

export const getProductsSuccess = products => {
  log.info("[PRODUCTS ACTION] GET_PRODUCTS_SUCCESS", products);
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    products
  };
};

export const requestRemoveProduct = () => {
  log.info("[PRODUCTS ACTION] REQUEST_REMOVE_PRODUCT");
  return {
    type: types.REQUEST_REMOVE_PRODUCT
  };
};

export const removeProductSuccess = products => {
  log.info("[PRODUCTS ACTION] REMOVE_PRODUCT_SUCCESS");
  return {
    type: types.REMOVE_PRODUCT_SUCCESS,
    products
  };
};