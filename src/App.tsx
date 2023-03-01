import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (todo: string): void => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    }
  };

  return (
    <div className="App">
      <h1>To-do</h1>
      <InputField handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
