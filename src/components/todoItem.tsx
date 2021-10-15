import { Checkbox, Input } from "@mui/material";
import { useRecoilState } from "recoil";
import { todoListState, todoListType } from "../atoms/todoListState";

const replaceItemAtIndex = (
  arr: todoListType[],
  index: number,
  newValue: todoListType
): todoListType[] => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (
  arr: todoListType[],
  index: number
): todoListType[] => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export const TodoItem = ({ item }: { item: todoListType }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <Checkbox checked={item.isComplete} onChange={toggleItemCompletion} />
      <Input type="text" value={item.text} onChange={editItemText} />
    </div>
  );
};
