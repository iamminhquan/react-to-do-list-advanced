import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Icon } from "@iconify/react";

import AddButton from "./components/AddButton";
import RemoveButton from "./components/RemoveButton";
import CompleteButton from "./components/CompleteButton";

const inputStyle = {
  width: 200,
  height: 20,
};

export default function App() {
  const [userInput, setUserInput] = useState("");

  // Get data from local storage when component mounted.
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem("list");
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    // Update local storage when list updated.
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  function handleAddTodo() {
    if (userInput.trim() === "") {
      window.alert("Please enter something.");
      return;
    }

    setList([...list, { message: userInput, isDone: false }]);
    setUserInput("");
  }

  function handleRemoveTodo(itemRemove) {
    const filteredList = list.filter((element) => {
      return element !== itemRemove;
    });

    setList(filteredList);
    setUserInput("");
  }

  function handleCompleteTodo(event, index) {
    const updatedList = [...list];
    updatedList[index].isDone = updatedList[index].isDone ? false : true;
    setList(updatedList);
  }

  return (
    <Fragment>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
        placeholder="Enter something to do..."
        style={inputStyle}
      />

      <ul>
        {list.map((element, index) => {
          // Create a key by element and index.
          const elementKey = element + String(index);

          return (
            <li key={elementKey}>
              {element.isDone ? (
                <span style={{ textDecoration: "line-through" }}>
                  {element.message}
                </span>
              ) : (
                <span>{element.message}</span>
              )}

              {/* Click this to complete tasks :D */}
              <CompleteButton
                handleCompleteTodo={(event) => handleCompleteTodo(event, index)}
              >
                <Icon icon="mdi:check-bold" />
              </CompleteButton>

              {/* Remove todo button, use the iconify. */}
              <RemoveButton handleRemoveTodo={() => handleRemoveTodo(element)}>
                <Icon icon="mdi:delete" />
              </RemoveButton>
            </li>
          );
        })}
      </ul>

      {/* Add button with the iconify. */}
      <AddButton handleAddTodo={handleAddTodo}>
        <Icon icon="mdi:plus" />
      </AddButton>
    </Fragment>
  );
}
