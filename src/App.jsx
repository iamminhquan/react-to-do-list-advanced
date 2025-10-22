import React from "react";
import { useState } from "react";
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
  const [editingIndex, setEditingIndex] = useState(null);

  function handleAddTodo() {
    if (userInput.trim() === "") {
      window.alert("Please enter something!");
      return;
    }

    setList([...list, userInput]);
    setUserInput("");
  }

  function handleOnChange(event, editingIndex) {
    if (event.target.checked) {
      window.alert("Check box changed!" + editingIndex);
    } else {
      window.alert("Check box not changed!");
    }
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

      <ol>
        {list.map(function (element, index) {
          // Create a key by element + index.
          const elementKey = element + String(index);
          return (
            <li key={elementKey}>
              <span>{element}</span>
              <input
                type="checkbox"
                name="marked"
                id="marked"
                onChange={(event) => handleOnChange(event, index)}
              />
            </li>
          );
        })}
      </ol>

      {/* Add button with the icon. */}
      <AddButton buttonStyle={buttonStyle} handleAddTodo={handleAddTodo}>
        <Icon icon="mdi:plus" />
      </AddButton>
    </Fragment>
  );
}
