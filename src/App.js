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
    showClear: false,
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const response = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
  //   );
  //   console.log(response.data);
  //   this.setState({ users: response.data, loading: false });
  // }
  searchUsers = async (user) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({
      users: response.data.items,
      loading: false,
      showClear: true,
    });
  };
  clearUsers = () => {
    this.setState({ users: [], showClear: false });
  };
  render() {
    return (
      <div>
        <Navbar />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={this.state.showClear}
        />
        <Users users={this.state.users} loading={this.state.loading} />
      </div>
    );
  }
}
export default App;
