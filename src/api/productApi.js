import store from "../store";
import {
	getProductsSuccess,
	requestProducts,
	requestAddProduct,
	addProductSuccess
} from "../actions/productsActions";

/**
 * Get all products
 */

var productList = [{ id: 0, name: "haha" }, { id: 1, name: "johnny deep" }];

export function getProducts() {
	var clonedArray = JSON.parse(JSON.stringify(productList));

	store.dispatch(requestProducts());
	setTimeout(() => {
		store.dispatch(getProductsSuccess(clonedArray));
	}, 1000);
}

export function addProduct(name) {
	store.dispatch(requestAddProduct());

	productList.push({
		id: productList[productList.length - 1].id + 1,
		name: name
	});
	var clonedArray = JSON.parse(JSON.stringify(productList));
	setTimeout(() => {
		store.dispatch(addProductSuccess(clonedArray));
	}, 1000);
}
