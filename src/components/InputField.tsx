import React, { useRef } from "react";
import "./InputField.css";

interface Props {
  //setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (todo: string) => void;
}

const InputField: React.FC<Props> = ({ handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const inputValue = inputRef.current?.value;
    handleAdd(inputValue!);

    //setTodo(inputValue!);
    inputRef.current?.blur();

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="input"
        className="form-input"
        placeholder="Enter a task..."
        ref={inputRef}
      />
      <input type="submit" className="form-btn" value="go" />
    </form>
  );
};

export default InputField;
