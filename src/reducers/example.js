import * as types from 'constants/ActionTypes';

export default function example(state = {
  example: 'foo'
}, action) {
  if (types.EXAMPLE_ACTION_TYPE === action.type) {
    return { ...state, example: action.example }
  }

  return state;
}
