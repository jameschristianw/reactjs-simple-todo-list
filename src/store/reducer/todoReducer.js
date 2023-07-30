import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_SINGLE_TODO, NEW_TODO, SAVE_EDITTED_TODO, SETUP_EDIT_FORM, } from "../action/todoAction"

const initialState = {
  todos: [{id: 1, title: 'Belajar'}, {id: 2, title: 'Tidur'}],
  newTodo: '',
  todo: {}
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      const todo = {
        id: state.todos.length + 1,
        title: state.newTodo
      }
      return {
        ...state,
        todos: [...state.todos, todo],
        newTodo: ''
      }
    case NEW_TODO:
      return {
        ...state,
        newTodo: action.todo
      }

    case DELETE_TODO:
      const index = state.todos.findIndex(obj => obj.id == action.todoId)
      const newTodos = [...state.todos]
      newTodos.splice(index, 1)

      return {
        ...state,
        todos: newTodos
      }

    case EDIT_TODO:
      return {
        ...state,
        newTodo: action.todo
      }

    case SETUP_EDIT_FORM:
      return {
        ...state,
        newTodo: action.title
      }

    case SAVE_EDITTED_TODO:
      const edittedTodo = [...state.todos]
      const updatedTodo = edittedTodo.map(todo => Object.assign({}, todo))
      updatedTodo.map(todo =>{
        if(todo.id === action.todoId) {
          todo.title = state.newTodo
        }
        return todo
      })

      return {
        ...state,
        newTodo: '',
        todos: updatedTodo
      }

    case GET_SINGLE_TODO:
      const temp = [...state.todos]
      const singleTodo = temp.filter(todo => todo.id == action.todoId);

      return {
        ...state,
        todo: singleTodo
      }
      
    default:
      return state
  }
}

export default todoReducer 