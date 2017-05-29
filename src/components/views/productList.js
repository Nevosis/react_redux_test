import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductList extends Component {
  render() {
    if (this.props.isFetching) return <div>Loading...</div>;
    else
      return (
        <div className="data-list">

          {this.props.products.map(product => {
            return (
              <div key={product.id} className="data-list-item">
                {product.name}
                  <button onClick={this.props.removeProduct.bind(null, product.id)}>X</button>
              </div>
            );
          })}

        </div>
      );
  }
}

ProductList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  removeProduct: PropTypes.func.isRequired
};

export default ProductList;
