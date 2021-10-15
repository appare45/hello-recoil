import { RecoilRoot } from "recoil";
import "./styles.css";
import { TodoList } from "./todolist";

export default function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
}
