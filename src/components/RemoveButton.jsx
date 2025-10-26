import { Fragment } from "react";

export default function RemoveButton({
  buttonStyle,
  handleRemoveTodo,
  children,
}) {
  return (
    <Fragment>
      <button style={buttonStyle} onClick={handleRemoveTodo}>
        {/* This is the icon props. */}
        {children}
      </button>
    </Fragment>
  );
}
