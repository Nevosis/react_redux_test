import React from "react";
import { Route, Switch } from "react-router-dom";
// // Layouts
import Menu from "./components/layouts/menu";
import AddProductListLayout from "./components/layouts/addProductListLayout";

// // Pages
import Home from "./components/home";

export default (
	<div>
		<Menu />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/products" searchType="products" component={AddProductListLayout} />


		</Switch>
	</div>
);
