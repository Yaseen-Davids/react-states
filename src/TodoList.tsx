import React from "react";
import { Task } from "./App";

type TodoListProps = {
  tasks: Task[];
  setTasks(tasks: Task[]): void;
}

export const TodoList: React.FC<TodoListProps> = ({ tasks, setTasks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>State</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr>
            <td>{task.task}</td>
            <td>{task.state}</td>
            <td><button>Action</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}