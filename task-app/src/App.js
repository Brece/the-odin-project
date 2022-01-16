import React from "react";
import { Overview } from './components/Overview';
import uniqid from 'uniqid';

class App extends React.Component {
  constructor() {
    super();
    // TODO: use Map() instead of Array for tasks
    this.state = {
      tasks: [],
      input: '',
      edit: false,
      editId: '',
      id: uniqid()
    }
    this.onSubmitTask = this.onSubmitTask.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleInput(e) {
    this.setState({ input: e.target.value });
  }

  onSubmitTask(e) {
    e.preventDefault();
    const input = this.state.input;
    
    if (this.state.edit) {
      this.setState((state) => {
        let newTasksArray = state.tasks.map((task) => {
          if (task.id === state.editId) {
            task = { id: state.editId, input: input };
          }
          return task;
        });
        
        return {
          tasks: newTasksArray,
          input: '',
          editId: '',
          id: uniqid(),
          edit: false
        }
      });
      return;
    }

    const task = this.state.tasks.find((task) => task.input === input);

    if (input !== '' && task === undefined) {
      this.setState((state) => {
        return {
          tasks: [...state.tasks, { id: state.id, input: state.input }],
          input: '',
          id: uniqid()
        }
      });
    }
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

  handleEdit(id) {
    const taskToEdit = this.state.tasks.find((task) => task.id === id);
    this.setState({
      edit: true,
      input: taskToEdit.input,
      editId: taskToEdit.id
    });
  }

  render() {
    return (
    <div>
      <form onSubmit={this.onSubmitTask}>
        <label htmlFor="taskInput">Enter Task:</label>
        <input type='text' id="taskInput" placeholder="Enter your task..." value={this.state.input} onChange={this.handleInput} />
        <button type='submit'>Add Task</button>
      </form>
        <Overview tasks={this.state.tasks} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
        <button type='button' onClick={this.resetState}>Delete all tasks</button>
    </div>
  )}
}

export default App;
