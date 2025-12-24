import React, { useContext } from "react";
import { TaskContext } from "../store/taskContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(TaskContext);

  return (
    <header className={darkMode ? "header dark" : "header"}>
      <h1>Task Tracker</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
