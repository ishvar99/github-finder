import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';
class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get('https://api.github.com/users');
    console.log(response.data);
    this.setState({ users: response.data, loading: false });
  }
  render() {
    return (
      <div>
        <Navbar />
        <Users users={this.state.users} loading={this.state.loading} />
      </div>
    );
  }
}
export default App;
