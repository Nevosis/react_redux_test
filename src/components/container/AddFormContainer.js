import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import productApi from "../../api/productApi";
import AddForm from "../views/addForm";

class AddFormContainer extends Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);

  }
  add(event) {
    event.preventDefault();

    let query = this.refs.child.getQuery();
    if (query) {
      this.refs.child.blankInput();
      
      productApi.addProduct(query);
    }
  }

  render() {
    return <AddForm add={this.add} ref="child" isAdding={this.props.isAdding} />;
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
