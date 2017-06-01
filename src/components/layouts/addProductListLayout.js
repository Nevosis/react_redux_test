import React from "react";
import ProductListContainer from "../container/ProductListContainer";
import AddFormContainer from "../container/AddFormContainer";
import "../../tmp.css";


var addProductListFormStyle = {
	marginBottom: 10
}


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
