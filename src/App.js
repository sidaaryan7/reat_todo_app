import React, { Component } from "react";
import Todo from "./todos";
import Addtodo from "./addForm";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play pubg" },
    ],
  };
  deleteTodos = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo;s</h1>
        <Todo todos={this.state.todos} deleteTodos={this.deleteTodos} />
        <Addtodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
