import { atom } from "recoil";

export type todoListType = {
  id: number;
  text: string;
  isComplete: boolean;
};

export const todoListState = atom<todoListType[]>({
  key: "todoListState",
  default: []
});
