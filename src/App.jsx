import React from "react";
import { useState } from "react";
import "./styles.css";
import { InputToDo } from "./components/InputToDo";
import { IncompleteToDos } from "./components/IncompleteToDos";
import { CompleteToDos } from "./components/CompleteToDos";

export const App = () => {
  const [toDoText, setToDoText] = useState("");
  const [incompleteToDos, setIncompleteToDos] = useState([]);
  const [completeToDos, setCompleteToDos] = useState([]);

  const onChangeToDoText = (event) => {
    return setToDoText(event.target.value);
  };

  const onClickAdd = () => {
    if (toDoText === "") return;
    const newToDos = [...incompleteToDos, toDoText];
    setIncompleteToDos(newToDos);
    setToDoText("");
  };

  const onClickDelete = (index) => {
    const newToDos = [...incompleteToDos];
    newToDos.splice(index, 1);
    setIncompleteToDos(newToDos);
  };

  const onClickComplete = (index) => {
    const newIncompleteToDos = [...incompleteToDos];
    newIncompleteToDos.splice(index, 1);

    const newCompleteToDos = [...completeToDos, incompleteToDos[index]];
    setIncompleteToDos(newIncompleteToDos);
    setCompleteToDos(newCompleteToDos);
  };

  const onClickBack = (index) => {
    const newCompleteToDos = [...completeToDos];
    newCompleteToDos.splice(index, 1);

    const newIncompleteToDos = [...incompleteToDos, completeToDos[index]];
    setCompleteToDos(newCompleteToDos);
    setIncompleteToDos(newIncompleteToDos);
  };

  return (
    <>
      <InputToDo
        toDoText={toDoText}
        onChange={onChangeToDoText}
        onClick={onClickAdd}
      />

      <IncompleteToDos
        todos={incompleteToDos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteToDos todos={completeToDos} onClickBack={onClickBack} />
    </>
  );
};
