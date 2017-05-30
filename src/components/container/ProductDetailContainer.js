import React, { Component } from "react";
import { connect } from "react-redux";
import ProductDetail from "../views/ProductDetail";
import productApi from '../../api/productApi';

  
class ProductDetailContainer extends Component {

  componentDidMount() {
    if (!this.props.products.length)
      productApi.getProducts();
  }
  render() {
    let productId = Number.parseInt(this.props.match.params.productId,10);
    const product = this.props.products.find((product) => {
      return product.id === productId
    });
    return <ProductDetail product={product} isFetching={this.props.isFetching} />;
  }
}

const mapStateToProps = function(store) {
  return {
    isFetching: store.productsState.isFetching,
    products: store.productsState.products
  };
};

export default connect(mapStateToProps)(ProductDetailContainer);
