import { atom, selector } from "recoil";
import { todoListState, todoListType } from "./todoListState";

type filterType = "Show All" | "Show Completed" | "Show Uncompleted";

export const todoListFilterState = atom<filterType>({
  key: "todoListFilterState",
  default: "Show All"
});

export const filteredTodoListState = selector<todoListType[]>({
  key: "filteredTodoListState",

  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);

      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);

      default:
        return list;
    }
  }
});
