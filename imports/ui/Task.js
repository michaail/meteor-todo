import React, { Component } from 'react';

import { Tasks } from '../api/tasks'

// Task component
export default class Task extends Component {
  toggleChecked() {
    Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked },
    });
  }
  
  deleteThsiTask() {
    Tasks.remove(this.props.task._id);
  }

  render() {
    // change task class when its state changes
    const taskClassName = this.props.task.checked ? 'checked' : '';

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThsiTask.bind(this)}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={!!this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />
        <span>{this.props.task.text}</span>
      </li>
    );
  }
}