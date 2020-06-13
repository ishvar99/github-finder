import GithubReducer from './githubReducers';
import GithubContext from './githubContext';
import React, { useReducer, useContext } from 'react';
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from './types';

const GithubState = () => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
};
