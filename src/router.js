import React from "react";
import { Route, Switch } from "react-router-dom";
// // Layouts
import Menu from "./components/layouts/menu";

// // Pages
import Home from "./components/home";
import ProductListContainer from "./components/container/ProductListContainer";

export default (
	<div>
		<Menu />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/products" component={ProductListContainer} />


		</Switch>
	</div>
);
