import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  PAGINATE,
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

    case CLEAR_USERS:
      return {
        ...state,
        allUsers: [],
        currentUsers: [],
        loading: false,
      };
    case PAGINATE:
      return {
        ...state,
        currentUsers: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
