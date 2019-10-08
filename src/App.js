import React, { Component } from 'react';
import Todoitems from './Todoitems.js';
import  TodoData from './TodoData.js';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state ={
      todos :TodoData
    }
    this.handleChnage=this.handleChnage.bind(this)
  }
  handleChnage(id)
  {
    this.setState(prevstate => {
      const updated = prevstate.todos.map(todo =>{
        if(todo.id === id)
        {
          todo.completed =!todo.completed
        }
        return todo
      })
      return {todos : updated}
    })
  }
  render() {
    console.log("1");
    const list =this.state.todos.map(L => <Todoitems item={L} handleChange={this.handleChnage}/>)
    return (
      <div className="App">
        <h1> Todo App </h1>
        {list}
      </div>
    );
  }
}

export default App;
