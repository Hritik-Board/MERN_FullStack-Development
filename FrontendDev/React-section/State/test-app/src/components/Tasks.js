import React from "react";
import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Finsih tuto", completed: true },
    { id: 2, name: "Grocer Shop", completed: false },

    { id: 3, name: "Prepare Dinner", completed: false },

    { id: 4, name: "Read a book", completed: false },
  ]);
  console.log(tasks);
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.name} - {task.completed ? "Completed" : "Pending"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
