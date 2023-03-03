import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
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

  const handleDragEnd = (result: DropResult) => {
    console.log(result);

    const { destination, source } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let active: number;

    if (source.droppableId === "TodoList") {
      active = source.index;
    } else {
      active = source.index;
    }

    if (destination.droppableId === "TodoList") {
      setTodos(
        todos.map((todo) =>
          todo.id === active ? { ...todo, isDone: false } : todo
        )
      );
    } else {
      setTodos(
        todos.map((todo) =>
          todo.id === active ? { ...todo, isDone: true } : todo
        )
      );
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="App">
        <h1>To-do</h1>
        <InputField handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </DragDropContext>
  );
};

export default App;
