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

var productApi = {
	getProducts() {
		var clonedArray = [...productList];

		console.log("[productApi.getProducts] START");

		store.dispatch(requestProducts());
		setTimeout(() => {
			console.log("[productApi.getProducts] END, dispatch ", clonedArray);
			store.dispatch(getProductsSuccess(clonedArray));
		}, 750);
	},

	addProduct(name) {
		store.dispatch(requestAddProduct());
		console.log("[productApi.addProduct] START, name ", name);

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