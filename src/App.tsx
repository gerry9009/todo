import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completed, setCompleted] = useState<Todo[]>([]);

  const handleAdd = (todo: string): void => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    }
  };

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let active = todos;
    let complete = completed;
    let add;

    if (source.droppableId === "TodoList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodoList") {
      active.splice(destination.index, 0, add);
      add.isDone = false;
    } else {
      add.isDone = true;
      complete.splice(destination.index, 0, add);
    }

    setTodos(active);
    setCompleted(complete);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="App">
        <h1>To-do</h1>
        <InputField handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completed={completed}
          setCompleted={setCompleted}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
