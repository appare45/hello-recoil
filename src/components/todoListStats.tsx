import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../atoms/todoListStatsState";

export const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum} </li>
      <li>Percentcompleted: {formattedPercentCompleted} </li>
    </ul>
  );
};
