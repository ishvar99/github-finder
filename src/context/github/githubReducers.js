import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        loading: false,
        allUsers: action.payload.all_users,
        currentUsers: action.payload.current_users,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
        allUsers: [],
        currentUsers: [],
      };

    default:
      return state;
  }
};
