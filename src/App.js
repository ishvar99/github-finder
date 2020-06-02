import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Pagination from './components/layouts/Pagination/Pagination';
import About from './components/layouts/About';
import User from './components/users/User/User';
class App extends Component {
  state = {
    currentUsers: [],
    user: {},
    allUsers: [],
    loading: false,
    showClear: false,
    currentPage: 1,
    usersPerPage: 9,
  };
  searchUsers = async (user) => {
    this.setState({ allUsers: [], currentUsers: [], loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    const allUsers = response.data.items;
    const currentUsers = allUsers.slice(0, 9);
    document.getElementById('search').value = '';
    this.setState({
      currentUsers: currentUsers,
      allUsers: allUsers,
      loading: false,
    });
  };
  clearUsers = () => {
    this.setState({ currentUsers: [], allUsers: [] });
  };
  paginate = (pageNumber) => {
    const { usersPerPage, allUsers } = this.state;
    const indexOfLastUser = pageNumber * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);
    this.setState({ currentUsers: currentUsers, currentPage: pageNumber });
  };
  getUser = async (username) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ user: response.data, loading: false });
  };
  render() {
    const { loading, currentUsers, user, allUsers, usersPerPage } = this.state;
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
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={currentUsers.length > 0 ? true : false}
                  />
                  <Users users={currentUsers} loading={loading} />
                  {this.state.currentUsers.length > 0 && (
                    <Pagination
                      usersPerPage={usersPerPage}
                      allUsers={allUsers.length}
                      paginate={this.paginate}
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
                  {...props} //we pass props to access match property of props in user component
                  getUser={this.getUser}
                  user={user}
                  loading={loading}
                />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}
export default App;
