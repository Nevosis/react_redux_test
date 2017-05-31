import React, { Component } from "react";
import { connect } from "react-redux";
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
    console.log("ADD NOTHING ---- Test abstract addform");
  }

  render() {
    return (
      <div>
        <AddForm
          add={this.addProduct}
          isAdding={this.props.isAdding}
          type="product"
        />
        
        <AddForm
          add={this.addNothing}
          isAdding={this.props.isAdding}
          type="nothing"
        />
        
      </div>
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
