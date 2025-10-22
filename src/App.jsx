import React, { useState } from "react";
import { Fragment } from "react";
import { Icon } from "@iconify/react";
import AddButton from "./components/AddButton";

const inputStyle = {
  width: 200,
  height: 20,
};

const buttonStyle = {
  width: 70,
  height: 25,
};

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  function handleAddTodo() {
    if (userInput.trim() === "") {
      window.alert("Please enter something.");
      return;
    }

    setList([...list, { message: userInput, isDone: false }]);
    setUserInput("");
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
          // Create an id and name for id property.
          const checkboxId = `marked-${index}`;

          return (
            <li key={elementKey}>
              {element.isDone ? (
                <span style={{ textDecoration: "line-through" }}>
                  {element.message}
                </span>
              ) : (
                <span>{element.message}</span>
              )}

              <input
                type="checkbox"
                id={checkboxId}
                checked={element.checked}
                onChange={(event) => {
                  const updatedList = [...list];
                  updatedList[index].isDone = event.target.checked;
                  setList(updatedList);
                }}
              />
            </li>
          );
        })}
      </ul>

      {/* Add button with the icon. */}
      <AddButton buttonStyle={buttonStyle} handleAddTodo={handleAddTodo}>
        <Icon icon="mdi:plus" />
      </AddButton>
    </Fragment>
  );
}
