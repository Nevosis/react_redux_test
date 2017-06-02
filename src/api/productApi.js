import store from "../store";
import {
	getProductsSuccess,
	requestProducts,
	requestAddProduct,
	addProductSuccess,
	requestRemoveProduct,
	removeProductSuccess
} from "../actions/productsActions";

const TIMEOUT = 150;

var productList = [{ id: 0, name: "haha" }, { id: 1, name: "johnny deep" }];

var productApi = {
	getProducts() {
		var clonedArray = [...productList];

		console.log("[productApi.getProducts] START");

		store.dispatch(requestProducts());
		setTimeout(() => {
			console.log(`[productApi.getProducts] END, dispatch `, clonedArray);
			store.dispatch(getProductsSuccess(clonedArray));
		}, TIMEOUT);
	},

	removeProduct(productId) {
		console.log("[productApi.removeProduct] START, ", productId);

		store.dispatch(requestRemoveProduct());

		//REMOVE OBJECT BY FINDING ID
		var productIndex = productList.findIndex(product => {
			if (product.id === productId) return true;
			return false;
		});
		if (productIndex >= 0) productList.splice(productIndex, 1);

		var clonedArray = [...productList];

		setTimeout(() => {
			console.log(`[productApi.getProducts] END, dispatch `, clonedArray);

			store.dispatch(removeProductSuccess(clonedArray));
		}, TIMEOUT);
	},

	addProduct(name) {
		store.dispatch(requestAddProduct());
		console.log("[productApi.addProduct] START, name %s", name);

		if (productList.length)
			productList.push({
				id: productList[productList.length - 1].id + 1,
				name: name
			});
		else
			productList.push({
				id: 0,
				name: name
			});
		var clonedArray = [...productList];
		setTimeout(() => {
			console.log(
				"[productApi.addProduct] END, productList ",
				productList
			);
			store.dispatch(addProductSuccess(clonedArray));
		}, TIMEOUT);
	}
};

export default productApi;
