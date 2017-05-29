import React, {Component} from "react";
import PropTypes from "prop-types";

// Using "Stateless Functional Components"
class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {inputValue:""};
    this.handleUpdate = this.handleUpdate.bind(this);
  }
handleUpdate(e) {
      this.setState({ inputValue: e.target.value });

}
  getQuery() {

    return this.refs.add.value;
  }

  blankInput() {
    this.setState({ inputValue: "" });
  }

  render() {
    const isAdding = this.props.isAdding;
    const inputValue = this.state.inputValue;

    return (
      <form onSubmit={this.props.add} className="add">
        <input type="text" ref="add" placeholder="Add" value={inputValue} onChange={this.handleUpdate}/>
        <button disabled={isAdding || !inputValue.length}>Add</button>
      </form>
    );
  }
}

AddForm.propTypes = {
  isAdding: PropTypes.bool,
  add: PropTypes.func.isRequired
};

export default AddForm;
