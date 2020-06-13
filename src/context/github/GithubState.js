import GithubReducer from './githubReducers';
import GithubContext from './githubContext';
import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    allUsers: [],
    currentUsers: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (username) => {
    setloading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    const all_users = response.data.items;
    console.log(all_users);
    const current_users = all_users.slice(0, 9);
    console.log(current_users);
    document.getElementById('search').value = '';
    dispatch({ type: SEARCH_USERS, payload: { all_users, current_users } });
  };

  const setloading = () => dispatch({ type: SET_LOADING });
  return (
    <GithubContext.Provider
      value={{
        allUsers: state.allUsers,
        currentUsers: state.currentUsers,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers: searchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
