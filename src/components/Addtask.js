import React, { Component } from "react";
import List from "./List";
import "../root/App.css"
import Demo from "../mock/AppMock";
import TodoInput from "./common/TodoInput";
import TodoButtons from "./common/TodoButtons";
import "bootstrap/dist/css/bootstrap.min.css";

export class Addtask extends Component {
  state = {
    content: "",
    data: [],
    count: 0,
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addtodo(this.state);
    const data = this.state.data;
    const obj = {
      name: this.state.content,
      key: this.state.count,
    };
    data.push(obj);
    this.setState({
      data,
      count: this.state.count + 1,
      content: "",
    });
  };
  render() {
    return (
      <div className="add">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content"></label>
          <TodoInput id="addtext" placeholder={this.props.Content.enter} content={this.state.content} handleChange={this.handleChange}/>
          <TodoButtons type="submit" name={this.props.Content.addButtonText} />
        </form>
        <div>
          <List data={this.state.data} />
        </div>
      </div>
    );
  }
}
Addtask.defaultProps = { Content: Demo };
export default Addtask;
