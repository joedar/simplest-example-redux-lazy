export const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  LOAD_TEST: 'LOAD_TEST',
  LOAD_TEST_SUCCESS: 'LOAD_TEST_SUCCESS'
}

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  }
}

export const loadTest = () => {
  return {
    type: actionTypes.LOAD_TEST
  }
}

export const loadTestSuccess = (data) => {
  return {
    type: actionTypes.LOAD_TEST_SUCCESS,
    data
  }
}
