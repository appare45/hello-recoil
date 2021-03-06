import { Button, Input } from "@mui/material";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";

let id = 0;
const getId = () => {
  return id++;
};

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { id: getId(), text: inputValue, isComplete: false }
    ]);
    setInputValue("");
  };
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  return (
    <div>
      <Input type="text" value={inputValue} onChange={onChange} />
      <Button onClick={addItem} variant="contained">
        Add
      </Button>
    </div>
  );
};
