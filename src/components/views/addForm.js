import React, {Component} from "react";

// Using "Stateless Functional Components"
class AddForm extends Component {
  getQuery() {
    return this.refs.add.value;
  }

  blankInput() {
    this.refs.add.value = "";
  }

  render() {
    const isAdding = this.props.isAdding;

    return (
      <form onSubmit={this.props.add} className="add">
        <input type="text" ref="add" placeholder="Add" />
        <button disabled={isAdding}>Add</button>
      </form>
    );
  }
}

export default AddForm;
