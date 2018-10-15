import React, { Component } from 'react';

import Task from './Task.js';

// App component
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'taks No. 1'},
      { _id: 2, text: 'taks No. 2'},
      { _id: 3, text: 'taks No. 3'}
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>TODO list</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}