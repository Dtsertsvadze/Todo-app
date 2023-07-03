import React, { useState } from "react";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault()
    props.onValueChange(inputValue)
    setInputValue('')
  };

  return (
    <div className="input">
      <form onSubmit={submitHandler}>
        <label>Enter your ToDo: </label>
        <input value={inputValue} onChange={handleInputChange} />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default Input;
