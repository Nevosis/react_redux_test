import React from "react";
import ProductListContainer from "../container/ProductListContainer";
import AddFormContainer from "../container/AddFormContainer";

// Using "Stateless Functional Components"
export default function(props) {
	return (
		<div className="addProductList">
			<div>
				<AddFormContainer />
			</div>
			<div className="addProductListContainer">
				<ProductListContainer />
			</div>
		</div>
	);
}
