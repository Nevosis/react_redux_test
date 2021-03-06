import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import productApi from "../../api/productApi";
import AddForm from "../views/addForm";

class AddFormContainer extends Component {
  constructor(props) {
    super(props);

    this.addProduct = this.addProduct.bind(this);
    this.addNothing = this.addNothing.bind(this);
  }
  addProduct(event, val) {
    event.preventDefault();

    if (val) {
      productApi.addProduct(val);
      return true;
    }
    return false;
  }
  addNothing(event, val) {
    event.preventDefault();
  }

  render() {
    return (
      <Row>
        <Col md={3}>
          <AddForm
            add={this.addProduct}
            isAdding={this.props.isAdding}
            type="product"
          />
        </Col>
        <Col md={3}>
          <AddForm
            add={this.addNothing}
            isAdding={this.props.isAdding}
            type="nothing"
          />
        </Col>

      </Row>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    isAdding: store.productsState.isAdding
  };
};

AddFormContainer.propTypes = {
  isAdding: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(AddFormContainer);
