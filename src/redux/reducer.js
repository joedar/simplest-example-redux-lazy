import { actionTypes } from './actions'

export const initialState = {
  count: 0,
  testData: null
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 }
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 }
      }
    case actionTypes.LOAD_TEST_SUCCESS:
      return {
        ...state,
        ...{ testData: action.data }
      }
    default:
      return state
  }
}
