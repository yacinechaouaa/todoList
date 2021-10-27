import "./App.css";
import AddTodo from "./componants/AddTodo";
import TodoList from "./componants/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="head">
        <h1 style={{ color: "#8E0505" }}>this is my app </h1>
        <AddTodo />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
