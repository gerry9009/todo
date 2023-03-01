import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  //const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (todo: string): void => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <h1>To-do</h1>
      <InputField handleAdd={handleAdd} />
      {/* <TodoList /> */}
      {todos.map((todo) => (
        <p key={todo.id}>{todo.todo}</p>
      ))}
    </div>
  );
};

export default App;
