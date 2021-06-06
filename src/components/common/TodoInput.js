import React, { Component } from "react";
import Demo from "../../mock/AppMock";

class TodoInput extends Component {
  render() {
    return (
      <input
        onChange={this.props.handleChange}
        type="text"
        placeholder={this.props.Content.enter}
        required
        value={this.props.content}
      />
    );
  }
}
TodoInput.defaultProps = { Content: Demo };
export default TodoInput;
