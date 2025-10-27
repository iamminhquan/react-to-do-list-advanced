import { Fragment } from "react";

export default function AddButton({ handleAddTodo, children }) {
  return (
    <Fragment>
      <button onClick={handleAddTodo}>
        {/* This is the icon props. */}
        {children}
      </button>
    </Fragment>
  );
}
