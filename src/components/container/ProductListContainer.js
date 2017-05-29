import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductList from '../views/productList';
import productApi from '../../api/productApi';

class ProductListContainer extends Component {

  componentDidMount() {
    if (!this.props.products.length)
      productApi.getProducts();
  }

  render() {
    return (
        <ProductList products={this.props.products} isFetching={this.props.isFetching} />    
    )
  }
}

const mapStateToProps = function(store) {
  return {
    isFetching: store.productsState.isFetching,
    products: store.productsState.products
  };
};

export default connect(mapStateToProps)(ProductListContainer);
