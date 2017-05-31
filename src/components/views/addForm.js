import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: "" };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleUpdate(e) {
    this.setState({ inputValue: e.target.value });
  }
  handleAdd(e, val) {
    if (this.props.add(e, val)) this.setState({ inputValue: "" });
  }
  render() {
    const isAdding = this.props.isAdding;
    const inputValue = this.state.inputValue;

    return (
      <Form inline onSubmit={e => this.handleAdd(e, inputValue)}>
        <FormGroup controlId="formInlineName">
          <FormControl
            type="text"
            ref="add"
            placeholder="Add"
            value={inputValue}
            onChange={this.handleUpdate}
          />
        </FormGroup>

        <Button
          disabled={isAdding || !inputValue.length}
          onClick={e => this.handleAdd(e, inputValue)}
        >
          Add {this.props.type}
        </Button>
      </Form>
    );
  }
}

AddForm.propTypes = {
  isAdding: PropTypes.bool,
  add: PropTypes.func.isRequired
};

export default AddForm;
