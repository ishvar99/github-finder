import GithubReducer from './githubReducers';
import GithubContext from './githubContext';
import React, { useReducer } from 'react';
import axios from 'axios';
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  PAGINATE,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    allUsers: [],
    currentUsers: [],
    user: {},
    repos: [],
    loading: false,
    usersPerPage: 9,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (username) => {
    setloading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    const all_users = response.data.items;
    const current_users = all_users.slice(0, 9);
    dispatch({
      type: SEARCH_USERS,
      payload: { all_users, current_users },
    });
  };

  const setloading = () => dispatch({ type: SET_LOADING });
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  const paginate = (pageNumber) => {
    const indexOfLastUser = pageNumber * state.usersPerPage;
    const indexOfFirstUser = indexOfLastUser - state.usersPerPage;
    const current_users = state.allUsers.slice(
      indexOfFirstUser,
      indexOfLastUser
    );
    dispatch({ type: PAGINATE, payload: current_users });
  };
  const getUser = async (username) => {
    setloading();
    const response = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    dispatch({ type: GET_USER, payload: response.data });
  };

  const getUserRepos = async (username) => {
    setloading();
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    dispatch({ type: 'GET_REPOS', payload: response.data });
  };

  return (
    <GithubContext.Provider
      value={{
        allUsers: state.allUsers,
        currentUsers: state.currentUsers,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        usersPerPage: state.usersPerPage,
        searchUsers,
        clearUsers,
        paginate,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
