import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { editTodoAction, saveEdittedTodo, setupEditForm } from "../store/action/todoAction";

import { useLocation, useNavigate } from "react-router-dom";

const EditPage = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const temp = location.state

  const [todo, setTodo] = useState(temp)

  useEffect(() => {
    dispatch(setupEditForm(todo.title))
  }, [])

  const updateValue = (value) => {
    dispatch(editTodoAction(value))
    setTodo({...todo, title: value})
  }

  const saveTodo = () => {
    dispatch(saveEdittedTodo(todo.id))
    navigate(-1)
  }

  return(
    <div style={{margin: '16px'}}>
      <div>
        <h1>Edit Page</h1>
      </div>
      <div>
        <button>
          <Link to={'/'} style={{textDecoration: 'none'}}>Back to homepage</Link>
        </button>
        
      </div>
      <div>
        <input type="text" onChange={(e) => updateValue(e.target.value)} value={todo.title}/>
        <button className="button" onClick={() => saveTodo()}>Edit todo</button>
      </div>
    </div>
  )
}

export default EditPage