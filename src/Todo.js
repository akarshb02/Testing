import React, { useState } from "react";

function Todo({ todo }) {
  const { id, completed, title } = todo;

  const h1 = <h1>{title}</h1>
  const text = completed ? <strike>{h1}</strike> : h1;

  return (
    <div data-testId={`todo-${id}`}>
      <h1 >{text}</h1>
    </div>
  );
}

export default Todo;
