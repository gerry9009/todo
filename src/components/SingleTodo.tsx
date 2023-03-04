import React, { useState, useRef, useEffect } from "react";
import "./SingleTodo.css";
import { Todo } from "../model";
import { MdDelete, MdDoneOutline } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { Draggable } from "react-beautiful-dnd";
import TodoList from "./TodoList";

interface Props {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completed: Todo[];
  setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleTodo: React.FC<Props> = ({
  index,
  todo,
  todos,
  setTodos,
  completed,
  setCompleted,
}) => {
  // handle edit mode - if it is false it not gonna be able to push any other button just the edit button
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
      const filtered = completed.filter((task) => task.id === id);

      if (!filtered.length) {
        const add = todos.filter((task) => task.id === id);
        add[0].isDone = true;
        setTodos(todos.filter((task) => task.id !== id));
        setCompleted((completed) => [...completed, ...add]);
      } else {
        const add = completed.filter((task) => task.id === id);
        add[0].isDone = false;
        setCompleted(completed.filter((task) => task.id !== id));
        setTodos((todos) => [...todos, ...add]);
      }
    }
  };

  const handleDelete = (id: number) => {
    if (edit) {
      const filtered = completed.filter((task) => task.id === id);
      if (!filtered.length) {
        setTodos(todos.filter((task) => todo.id !== id));
      } else {
        setCompleted(completed.filter((task) => todo.id !== id));
      }
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent, id: number) => {
    if (e.key === "Enter") {
      handleEdit(id);
    }
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <li
          key={todo.id}
          className={`singleTodo-item ${
            !todo.isDone ? "" : "singleTodo-item_done"
          } ${snapshot.isDragging ? "dragging" : ""}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
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
            <button
              className="singleTodo-btn"
              onClick={() => handleEdit(todo.id)}
            >
              <AiFillEdit />
            </button>
            <button
              className="singleTodo-btn"
              onClick={() => handleDone(todo.id)}
            >
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
      )}
    </Draggable>
  );
};

export default SingleTodo;
