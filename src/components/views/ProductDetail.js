import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductDetail extends Component {
	render() {
		let product = this.props.product;
		let isFetching = this.props.isFetching;

		if (isFetching) return <div>Loading...</div>;
		else if (product.id >= 0)
			return (
				<div>
					name : {product.name}
				</div>
			);
		return <div>Product not found</div>;
	}
}

ProductDetail.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string
	})
};

export default ProductDetail;
