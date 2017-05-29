import store from "../store";
import {
	getProductsSuccess,
	requestProducts,
	requestAddProduct,
	addProductSuccess,
	requestRemoveProduct,
	removeProductSuccess
} from "../actions/productsActions";

/**
 * Get all products
 */

var productList = [{ id: 0, name: "haha" }, { id: 1, name: "johnny deep" }];

var productApi = {
	getProducts() {
		var clonedArray = [...productList];

		console.log("[productApi.getProducts] START");

		store.dispatch(requestProducts());
		setTimeout(() => {
			console.log(`[productApi.getProducts] END, dispatch `, clonedArray);
			store.dispatch(getProductsSuccess(clonedArray));
		}, 750);
	},

	removeProduct(productId) {

		console.log("[productApi.removeProduct] START, ", productId);

		store.dispatch(requestRemoveProduct());

		//REMOVE OBJECT BY FINDING ID
		productList.splice(productList.findIndex(product => {
			if (product.id === productId)
				return true;
			return false;
		}), 1);

		var clonedArray = [...productList]

		setTimeout(() => {
			console.log(`[productApi.getProducts] END, dispatch `, clonedArray);

			store.dispatch(removeProductSuccess(clonedArray));
		}, 750);
	},

	addProduct(name) {
		store.dispatch(requestAddProduct());
		console.log("[productApi.addProduct] START, name %s", name);

		productList.push({
			id: productList[productList.length - 1].id + 1,
			name: name
		});
		var clonedArray = [...productList];
		setTimeout(() => {
			console.log(
				"[productApi.addProduct] END, productList ",
				productList
			);
			store.dispatch(addProductSuccess(clonedArray));
		}, 750);
	}
};

export default productApi;
