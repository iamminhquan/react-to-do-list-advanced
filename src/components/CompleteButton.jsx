import { Fragment } from "react";

export default function CompleteButton({ handleCompleteTodo, children }) {
  return (
    <Fragment>
      <button onClick={handleCompleteTodo}>
        {/* This is the icon props. */}
        {children}
      </button>
    </Fragment>
  );
}
