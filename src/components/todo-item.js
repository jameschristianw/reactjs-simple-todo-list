import React from "react";
import { Link } from "react-router-dom";

const TodoItem = (props) => {
  return (
    <div>
      <h3>{props.todo.title}</h3>
      <button className="button" onClick={() => {props.editAction(props.todo)}}>Edit</button><button onClick={() => {props.deleteAction(props.todo.id)}} className="button">Delete</button>
    </div>
  )
}

export default TodoItem