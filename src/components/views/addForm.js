import React, { Component } from "react";
import PropTypes from "prop-types";
import {Form, FormGroup, FormControl, Button} from "react-bootstrap";

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: "" };
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleUpdate(e) {
    this.setState({ inputValue: e.target.value });
  }
  getQuery() {
    return this.refs.add.props.value;
  }

  blankInput() {
    this.setState({ inputValue: "" });
  }

  render() {
    const isAdding = this.props.isAdding;
    const inputValue = this.state.inputValue;

    return (
      <Form inline onSubmit={this.props.add}>
        <FormGroup controlId="formInlineName">
          <FormControl type="text" ref="add" placeholder="Add" value={inputValue} onChange={this.handleUpdate} />
        </FormGroup>

        <Button disabled={isAdding || !inputValue.length} onClick={this.props.add}>
          Add Product
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

// <form onSubmit={this.props.add} className="add">
//         <input type="text" ref="add" placeholder="Add" value={inputValue} onChange={this.handleUpdate}/>
//         <button disabled={isAdding || !inputValue.length}>Add</button>
//       </form>

// <Form inline>
//     <FormGroup controlId="formInlineName">
//       <ControlLabel>Name</ControlLabel>
//       {' '}
//       <FormControl type="text" placeholder="Jane Doe" />
//     </FormGroup>
//     {' '}
//     <FormGroup controlId="formInlineEmail">
//       <ControlLabel>Email</ControlLabel>
//       {' '}
//       <FormControl type="email" placeholder="jane.doe@example.com" />
//     </FormGroup>
//     {' '}
