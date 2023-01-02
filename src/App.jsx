import React from "react";
import { useState } from "react";
import "./styles.css";

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
      <div className="input-area">
        <input
          placeholder="ToDoを追加"
          value={toDoText}
          onChange={onChangeToDoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="imcomplete-area">
        <p className="title">未完了のToDo</p>
        <ul>
          {incompleteToDos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のToDo</p>
        <ul>
          {completeToDos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻る</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
