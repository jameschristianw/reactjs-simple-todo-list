import React from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

import { newTodoAction, addTodoAction, deleteTodoAction } from '../store/action/todoAction'

import TodoItem from "../components/todo-item";

import { useNavigate } from "react-router-dom";

const Homepage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todoReducer.todos)
  const newTodo = useSelector(state => state.todoReducer.newTodo)

  const deleteTodo = (id) => {
    dispatch(deleteTodoAction(id))
  }

  const editTodo = todo => {
    navigate(`/edit/${todo.id}`, {replace: false, state: todo})
  }

  const todoList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} deleteAction={(id) => deleteTodo(id)} editAction={(todo) => editTodo(todo)}/>)

  return(
    <div style={{margin: '16px'}}>
      <h1>Homepage</h1>
      <h2>Todo List</h2>
      <input type="text" onChange={(e) => {dispatch(newTodoAction(e.target.value))}} value={newTodo}/>
      <button className="button" onClick={() => dispatch(addTodoAction())}>Add todo</button>
      {todoList}
    </div>
  )
}

export default Homepage