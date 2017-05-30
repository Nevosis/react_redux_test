import React from "react";

import { Route, Switch } from "react-router-dom";
// // Layouts
import Menu from "./components/layouts/menu";
import AddProductListLayout from "./components/layouts/addProductListLayout";

// // Pages
import Home from "./components/home";
import Product from "./components/container/ProductDetailContainer";

export default (
	<div>
		<Menu />
		<div className="app">
			<Switch>

				<Route exact path="/" component={Home} />
				<Route exact path="/products" component={AddProductListLayout} />
				<Route path={"/products/:productId"} component={Product}/>
			</Switch>
		</div>
	</div>
);
