import React from "react";
import SingleTodo from "./SingleTodo";
import "./TodoList.css";
import { Todo } from "../model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos-container">
      <ul className="todoList">
        <h2>Active</h2>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
      </ul>
      <ul className="todoList remove">
        <h2>Completed</h2>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
