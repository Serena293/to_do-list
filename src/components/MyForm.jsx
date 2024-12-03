import React, { Component } from "react";
import PostIt from "./PostIt";

class MyForm extends Component {
  state = {
    toDo: {
      task: "",
      date: "",
      important: false,
    },
    tasks: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { toDo, tasks } = this.state;

    if (!toDo.task || !toDo.date) {
      alert("Please fill in all fields.");
      return;
    }

    this.setState({
      tasks: [...tasks, toDo],
      toDo: {
        task: "",
        date: "",
        important: false,
      },
    });
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    this.setState({
      toDo: {
        ...this.state.toDo,
        [name]: type === "checkbox" ? checked : value,
      },
    });
  };

  render() {
    const today = new Date().toISOString().split("T")[0];
    const { toDo, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label>Task:</label>
            <input
              type="text"
              name="task"
              placeholder="Remember to..."
              value={toDo.task}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              min={today}
              value={toDo.date}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label>
              <input
                type="checkbox"
                name="important"
                checked={toDo.important}
                onChange={this.handleChange}
              />
              Mark as important
            </label>
          </div>

          <button type="submit">Save</button>
        </form>

        <div className="post-it-list">
          {tasks.map((task, index) => (
            <PostIt key={index} task={task} />
          ))}
        </div>
      </div>
    );
  }
}

export default MyForm;
