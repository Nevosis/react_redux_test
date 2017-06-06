import store from "../store";
import log from "../utils/log";
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

		log.log("[productApi.getProducts] START");

		store.dispatch(requestProducts());
		setTimeout(() => {
			store.dispatch(getProductsSuccess(clonedArray));
			log.log(`[productApi.getProducts] END`);
		}, TIMEOUT);
	},

	removeProduct(productId) {
		log.log("[productApi.removeProduct] START, ", productId);

		store.dispatch(requestRemoveProduct());

		//REMOVE OBJECT BY FINDING ID
		var productIndex = productList.findIndex(product => {
			if (product.id === productId) return true;
			return false;
		});
		if (productIndex >= 0) productList.splice(productIndex, 1);

		var clonedArray = [...productList];

		setTimeout(() => {
			store.dispatch(removeProductSuccess(clonedArray));
			log.log(`[productApi.getProducts] END`);
		}, TIMEOUT);
	},

	addProduct(name) {
		log.log("[productApi.addProduct] START, name %s", name);

		store.dispatch(requestAddProduct());

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
			store.dispatch(addProductSuccess(clonedArray));
			log.log("[productApi.addProduct] END");
		}, TIMEOUT);
	}
};

export default productApi;
