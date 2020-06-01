import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import './App.css';
class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    console.log(process.env.REACT_APP_CLIENT_ID);
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    console.log(response.data);
    this.setState({ users: response.data, loading: false });
  }
  searchUsers(user) {
    console.log(user);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Search searchUsers={this.searchUsers} />
        <Users users={this.state.users} loading={this.state.loading} />
      </div>
    );
  }
}
export default App;
