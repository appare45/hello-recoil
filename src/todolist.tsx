import { MenuItem, Select } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  filteredTodoListState,
  todoListFilterState
} from "./atoms/todoListFilterState";

import { TodoItem } from "./components/todoItem";
import { TodoItemCreator } from "./components/todoItemCreator";
import { TodoListStats } from "./components/todoListStats";

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <Select value={filter} onChange={updateFilter}>
        <MenuItem value="Show All">All</MenuItem>
        <MenuItem value="Show Completed">Completed</MenuItem>
        <MenuItem value="Show Uncompleted">Uncompleted</MenuItem>
      </Select>
    </>
  );
};

export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
