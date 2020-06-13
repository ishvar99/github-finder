import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/Users/Users';
import axios from 'axios';
import Search from './components/Users/Search';
import Pagination from './components/layouts/Pagination/Pagination';
import About from './components/layouts/About';
import User from './components/Users/User/User';
const App = () => {
  const [currentUsers, setcurrentUsers] = useState([]);
  const [repos, setrepos] = useState([]);
  const [user, setuser] = useState({});
  const [allUsers, setallUsers] = useState([]);
  const [loading, setloading] = useState(false);
  const usersPerPage = 9;

  const searchUsers = async (username) => {
    setallUsers([]);
    setcurrentUsers([]);
    setloading(true);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    const all_users = response.data.items;
    const current_users = all_users.slice(0, 9);
    document.getElementById('search').value = '';
    setcurrentUsers(current_users);
    setallUsers(all_users);
    setloading(false);
  };
  const clearUsers = () => {
    setcurrentUsers([]);
    setallUsers([]);
  };
  const paginate = (pageNumber) => {
    const indexOfLastUser = pageNumber * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const current_users = allUsers.slice(indexOfFirstUser, indexOfLastUser);
    setcurrentUsers(current_users);
  };
  const getUser = async (username) => {
    setloading(true);
    const response = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setuser(response.data);
    setloading(false);
  };
  const getUserRepos = async (username) => {
    setloading(true);
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setrepos(response.data);
  };
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => {
            return (
              <Fragment>
                <Search
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  showClear={currentUsers.length > 0 ? true : false}
                />
                <Users users={currentUsers} loading={loading} />
                {currentUsers.length > 0 && (
                  <Pagination
                    usersPerPage={usersPerPage}
                    allUsers={allUsers.length}
                    paginate={paginate}
                  />
                )}
              </Fragment>
            );
          }}
        />
        <Route exact path='/about' component={About} />
        <Route
          exact
          path='/user/:login'
          render={(props) => {
            console.log(props);
            return (
              <User
                repos={repos}
                {...props} //we pass props to access match property of props in user component
                getUser={getUser}
                getUserRepos={getUserRepos}
                user={user}
                loading={loading}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
};
export default App;
