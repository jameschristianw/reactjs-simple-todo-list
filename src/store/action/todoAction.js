export const ADD_TODO = "ADD_TODO"
export const EDIT_TODO = "EDIT_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const NEW_TODO = "NEW_TODO"
export const GET_SINGLE_TODO = "GET_SINGLE_TODO"
export const SETUP_EDIT_FORM = "SETUP_EDIT_FORM"
export const SAVE_EDITTED_TODO = "SAVE_EDITTED_TODO"

export const newTodoAction = (todo) => {
  return {
    type: NEW_TODO,
    todo: todo
  }
}

export const addTodoAction = () => {
  console.log('todo action');
  return {
    type: ADD_TODO
  }
}

export const editTodoAction = (todo) => {
  return {
    type: EDIT_TODO,
    todo: todo
  }
}

export const setupEditForm = (title) => {
  return {
    type: SETUP_EDIT_FORM,
    title: title
  }
}

export const saveEdittedTodo = (todoId) => {
  return {
    type: SAVE_EDITTED_TODO,
    todoId: todoId,
  }
}

export const deleteTodoAction = (todoId) => {
  return {
    type: DELETE_TODO,
    todoId: todoId
  }
}

export const getSingleTodo = (todoId) => {
  return {
    type: GET_SINGLE_TODO,
    todoId: todoId
  }
}