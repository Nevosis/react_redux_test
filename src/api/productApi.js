import store from "../store";
import { getProductsSuccess, requestProducts } from "../actions/productsActions";

/**
 * Get all products
 */

export function getProducts() {
  store.dispatch(requestProducts());
  setTimeout(() => {
    store.dispatch(getProductsSuccess([{ id: 0, name: "haha" },{ id: 1, name: "johnny deep" }]));
  }, 1000);
}
