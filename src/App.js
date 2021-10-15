import { RecoilRoot } from "recoil";
import "./styles.css";
import { TodoList } from "./todolist";

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
}
