import { userConstants } from '../constants';

const initialState =  {loading:false};

export function main(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case userConstants.GET_REQUEST:
      return {
        ...state,
        loading: true
      };  
    case userConstants.FINISH_REQUEST:
      return {
        ...state,
        loading: false
      };
    default:
      return state
  }
}