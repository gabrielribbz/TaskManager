import React from "react";
import { X, Info } from "lucide-react";

function Tasks(props) {
  console.log(props);
  return (
    <ul className="fundo">
      {props.tasks.map((task) => (
        <li key={task.id}>
          <button
            className={`lista ${task.isCompleted && "linha-sobre"}`}
            onClick={() => props.onTaskClick(task.id)}
          >
            {task.title}
          </button>
          <button className="verDetalhes">
            <Info />
          </button>
          <button
            className="verDetalhes"
            onClick={() => props.deleteTask(task.id)}
          >
            <X />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
