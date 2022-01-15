import React from "react";
import { Overview } from './components/Overview';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      input: '',
      count: 0
    }
    this.updateState = this.updateState.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInput(e) {
    this.setState({ input: e.target.value });
  }

  updateState() {
    this.setState((state) => {
      return {
        tasks: [...state.tasks, { id: state.count, input: state.input}],
        input: '',
        count: state.count + 1
      }
    });
  }

  resetState() {
    this.setState(
      {
      tasks: [],
      input: ''
      }
    );
  }

  handleDelete(id) {
    this.setState((state) => {
      let newState = state.tasks.filter((task) => task.id !== id);
      return { tasks: newState }
    });
  }

  render() {
    return (
    <div>
      <input type='text' placeholder="Enter your task..." value={this.state.input} onChange={this.handleInput} />
      <button type='button' onClick={this.updateState}>Add Task</button>
      <button type='button' onClick={this.resetState}>Delete all tasks</button>
      <Overview tasks={this.state.tasks} handleDelete={this.handleDelete} />
    </div>
  )}
}

export default App;
