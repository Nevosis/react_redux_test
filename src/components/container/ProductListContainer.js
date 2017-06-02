import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductList from '../views/productList';
import productApi from '../../api/productApi';

class ProductListContainer extends Component {
  constructor(props) {
    super(props);

    this.removeProduct = this.removeProduct.bind(this);

  }
  componentDidMount() {
    if (!this.props.products.length)
      productApi.getProducts();
  }
  removeProduct(productId) {
    productApi.removeProduct(productId);
  }
  render() {
    return (
        <ProductList products={this.props.products} isFetching={this.props.isFetching} isRemoving={this.props.isRemoving} removeProduct={this.removeProduct}/>    
    )
  }
}

const mapStateToProps = function(store) {
  return {
    isFetching: store.productsState.isFetching,
    isRemoving: store.productsState.isRemoving,
    products: store.productsState.products
  };
};

export default connect(mapStateToProps)(ProductListContainer);
