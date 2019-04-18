import React from "react";

import TodoItem from "./todoItem";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todo: ""
    };
  }

  renderTodos = () => {
    return this.state.todos.map(item => {
      return <TodoItem title={item} />;
    });
  };

  handleChange = event => {
    this.setState({
      todo: event.target.value
    });
    console.log(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: ""
    });
  };

  render() {
    return (
      <div className="app">
        <h1>ToDo List</h1>

        <form onSubmit={this.handleSubmit} className="add-todo">
          <input
            type="text"
            placeholder="Add Todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        {this.renderTodos()}
      </div>
    );
  }
}
