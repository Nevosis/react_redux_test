import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProductList extends Component {
  render() {
    const isRemoving = this.props.isRemoving;
    function renderLine(product, removeProduct) {
      return (
        <tr key={product.id}>
          <td>
            <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>
          </td>
          <td>
            <Button
              bsStyle="danger"
              bsSize="small"
              block
              onClick={removeProduct.bind(null, product.id)}
              disabled={isRemoving}
            >
              X
            </Button>
          </td>
        </tr>
      );
    }
    if (this.props.isFetching) return <div>Loading...</div>;
    else {
      // Slice is to leave props.products immutable => could use redux, send sort action, and change products.
      const sortedProducts = this.props.products
        .slice()
        .sort((a, b) => (a.name > b.name ? 1 : -1));

      return (
        <div className="data-list">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="col-xs-11">Product</th>
                <th className="col-xs-1">Delete</th>
              </tr>
            </thead>
            <tbody>

              {sortedProducts.map(product => {
                return renderLine(product, this.props.removeProduct);
              })}
            </tbody>

          </Table>

        </div>
      );
    }
  }
}

ProductList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  removeProduct: PropTypes.func.isRequired
};

export default ProductList;
