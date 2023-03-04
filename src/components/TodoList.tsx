import React from "react";
import SingleTodo from "./SingleTodo";
import "./TodoList.css";
import { Todo } from "../model";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completed: Todo[];
  setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completed,
  setCompleted,
}) => {
  return (
    <div className="todos-container">
      <Droppable droppableId="TodoList">
        {(provided) => (
          <ul
            className="todoList"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Active Tasks</h2>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                completed={completed}
                setCompleted={setCompleted}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <Droppable droppableId="CompletedList">
        {(provided) => (
          <ul
            className="todoList remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Completed Tasks</h2>
            {completed.map((todo, index) => (
              <SingleTodo
                index={index}
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                completed={completed}
                setCompleted={setCompleted}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;

/**

      <Droppable droppableId="TodoList">
        {(provided) => (
          <ul
            className="todoList"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Active Tasks</h2>
            {todos
              .filter((todo) => todo.isDone === false)
              .map((todo, index) => (
                <SingleTodo
                  index={index}
                  key={todo.id}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      <Droppable droppableId="TodoCompleted">
        {(provided) => (
          <ul
            className="todoList remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Completed Tasks</h2>
            {todos
              .filter((todo) => todo.isDone === true)
              .map((todo, index) => (
                <SingleTodo
                  index={index}
                  key={todo.id}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
 */
