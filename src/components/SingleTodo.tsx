import React from "react";
import "./SingleTodo.css";
import { Todo } from "../model";
import { MdDelete, MdDoneOutline } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <li key={todo.id} className="singleTodo-item">
      <input
        className="singleTodo-todo"
        type="form"
        value={todo.todo}
        disabled
      />
      <div>
        <button className="singleTodo-btn">
          <AiFillEdit />
        </button>
        <button className="singleTodo-btn">
          <MdDoneOutline />
        </button>
        <button className="singleTodo-btn">
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default SingleTodo;
