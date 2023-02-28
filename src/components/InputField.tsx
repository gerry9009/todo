import React from "react";
import "./InputField.css";

const InputField = () => {
  return (
    <form className="form">
      <input
        type="input"
        className="form-input"
        placeholder="Enter a task..."
      />
      <input type="submit" className="form-btn" value="go" />
    </form>
  );
};

export default InputField;
