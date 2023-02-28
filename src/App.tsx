import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  console.log(todo);

  return (
    <div className="App">
      <h1>To-do</h1>
      <InputField setTodo={setTodo} />
    </div>
  );
};

export default App;
