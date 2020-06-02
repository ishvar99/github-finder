import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Pagination from './components/layouts/Pagination/Pagination';
class App extends Component {
  state = {
    users: [],
    loading: false,
    showClear: false,
    currentPage: 1,
    usersPerPage: 9,
    totalUsers: [],
  };
  searchUsers = async (user) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ totalUsers: response.data.items });
    const indexOfLastUser = this.state.currentPage * this.state.usersPerPage;
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage;
    const currentUsers = response.data.items.slice(
      indexOfFirstUser,
      indexOfLastUser
    );
    this.setState({
      users: currentUsers,
      loading: false,
    });
  };
  clearUsers = () => {
    this.setState({ users: [] });
  };
  render() {
    return (
      <div>
        <Navbar />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={this.state.users.length > 0 ? true : false}
        />
        <Users users={this.state.users} loading={this.state.loading} />
        {this.state.users.length > 0 && (
          <Pagination
            usersPerPage={this.state.usersPerPage}
            totalUsers={this.state.totalUsers.length}
          />
        )}
      </div>
    );
  }
}
export default App;
