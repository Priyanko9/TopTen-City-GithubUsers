import { errorConstants } from '../constants';

const initialState =  {};

export function error(state = initialState, action) {
  switch (action.type) {
    case errorConstants.ERROR:
      return {
          ...state,
        msg: action.msg
      };
    case errorConstants.CLEAR_ERROR:
        return {
            ...state,
          msg: null
        };  
    default:
      return state
  }
}