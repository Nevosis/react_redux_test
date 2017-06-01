import React from "react";

import { Route, Switch } from "react-router-dom";
// // Layouts
import Menu from "./components/layouts/menu";
import AddProductListLayout from "./components/layouts/addProductListLayout";

// // Pages
import Home from "./components/home";
import Product from "./components/container/ProductDetailContainer";

const appStyle = {
	marginTop: 50,
	marginBottom: 50,
	marginLeft: 50,
	marginRight: 50
};

export default (
	<div>
		<Menu />
		<div style={appStyle}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route
					exact
					path="/products"
					component={AddProductListLayout}
				/>
				<Route path={"/products/:productId"} component={Product} />
			</Switch>
		</div>
	</div>
);
