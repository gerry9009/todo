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
    <ul className="todoList">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
};

export default TodoList;
