import { Fragment } from "react";

export default function AddButton({ buttonStyle, handleAddTodo, children }) {
  return (
    <Fragment>
      <button style={buttonStyle} onClick={handleAddTodo}>
        {children}
      </button>
    </Fragment>
  );
}
