import React, { useState, useContext } from "react";
import { TaskContext } from "../store/taskContext";

const TaskInput = () => {
  const [text, setText] = useState("");
  const { tasks, setTasks } = useContext(TaskContext);

  const handleAdd = () => {
    if (!text.trim()) {
      alert("Please enter a task");
      return;
    }
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setText("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default TaskInput;
