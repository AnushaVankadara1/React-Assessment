import React, { Component } from "react";
import Demo from "../../mock/AppMock";

class TodoButtons extends Component {
  render() {
    return <button id={this.props.name} onClick={this.props.onClick}>{this.props.name}</button>;
  }
}
TodoButtons.defaultProps = { Content: Demo };
export default TodoButtons;
