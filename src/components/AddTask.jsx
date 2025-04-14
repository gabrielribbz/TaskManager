import React, { useState } from "react";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div id="adicionarTask" className="fundo">
      <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="verDetalhes"
        onClick={() => {
          if (!title || !description) {
            return;
          }
          props.onAddTaskSubmit(title, description);
          setDescription("");
          setTitle("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
