import { UPDATE_NUMBER } from "../action/MainAction"

const initialState = {
  number: 0,
  value: '',
  message: '',
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NUMBER:
      const number = action.number
      return {
        ...state,
        number: state.number + number
      }
    default: 
      return state
  }
}

export default mainReducer