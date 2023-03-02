import React, { useState, useRef, useEffect } from "react";
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
  const [edit, setEdit] = useState<boolean>(true);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (id: number) => {
    if (!todo.isDone) {
      setEdit(!edit);
    }
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
  };

  const handleDone = (id: number) => {
    if (edit) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )
      );
    }
  };

  const handleDelete = (id: number) => {
    if (edit) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent, id: number) => {
    if (e.key === "Enter") {
      handleEdit(id);
    }
  };

  return (
    <li
      key={todo.id}
      className={
        !todo.isDone
          ? "singleTodo-item"
          : "singleTodo-item singleTodo-item_done"
      }
    >
      <input
        className="singleTodo-todo"
        type="form"
        ref={inputRef}
        value={editTodo}
        disabled={edit}
        onKeyDown={(e) => handleOnKeyDown(e, todo.id)}
        onChange={(e) => setEditTodo(e.target.value)}
      />
      <div className="singleTodo-container">
        <button className="singleTodo-btn" onClick={() => handleEdit(todo.id)}>
          <AiFillEdit />
        </button>
        <button className="singleTodo-btn" onClick={() => handleDone(todo.id)}>
          <MdDoneOutline />
        </button>
        <button
          className="singleTodo-btn"
          onClick={() => handleDelete(todo.id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default SingleTodo;
