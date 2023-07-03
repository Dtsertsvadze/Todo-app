import { useState, useEffect, useRef } from "react";
import Input from "./Input";
import Items from "./Items";
import "./Todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      const localStorageObject = localStorage.getItem("myTodos");
      console.log(localStorageObject);
      if (localStorageObject && isMounted) {
        setTodos(JSON.parse(localStorageObject));
      }
      isMounted.current = false;
    }
  }, []);

  useEffect(() => {
    if (todos) {
      localStorage.setItem("myTodos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleValueChange = (newTodo) => {
    setTodos([
      ...todos,
      {
        content: newTodo,
        id: Math.random(),
        isCompleted: false,
      },
    ]);
  };

  const handleComplete = (itemId) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }
      return item;
    });

    setTodos(updatedTodos);
  };

  const handleDelete = (updatedTodos) => {
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <Input onValueChange={handleValueChange} />
      <Items onComplete={handleComplete} onDelete={handleDelete} data={todos} />
    </div>
  );
};

export default Todos;
