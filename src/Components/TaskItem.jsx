import React, { useContext } from "react";
import { TaskContext } from "../store/taskContext";

const TaskItem = ({ task }) => {
  const { tasks, setTasks } = useContext(TaskContext);

  const toggleComplete = () => {
    const updated = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  const deleteTask = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <li className={task.completed ? "task-item completed" : "task-item"}>
      <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
      <span>{task.text}</span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default TaskItem;
