import React, { Component } from 'react';
import './App.css';
import Addtask from './components/Addtask';
import Demo from './mock/AppMock';

  class App extends React.Component {
  state = {
    todos: [],
  }
  addtodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
      })
  }  
   render(){
      return(
      <div className="div_class">
        <h1 >{this.props.Content.heading} </h1><br/>
        <div >
       <Addtask addtodo={this.addtodo} />
    </div>
     </div>
    );
      }
  }
  App.defaultProps={Content: Demo}
  export default App;