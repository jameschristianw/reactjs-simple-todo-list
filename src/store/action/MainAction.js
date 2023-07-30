export const UPDATE_NUMBER = "UPDATE_NUMBER"

export const updateNumberAction = (number) => {
  return {
    type: UPDATE_NUMBER,
    number: number
  }
}