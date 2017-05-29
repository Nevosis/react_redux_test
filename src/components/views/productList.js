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
              </div>
            );
          })}

        </div>
      );
  }
}

ProductList.propTypes = {
  isFetching: PropTypes.bool.isRequired
};

export default ProductList;
