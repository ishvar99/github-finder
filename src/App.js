import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/layouts/Home/Home';
import About from './components/layouts/About';
import User from './components/Users/User/User';
import GithubState from './context/github/GithubState';
const App = () => {
  return (
    <GithubState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/user/:login' component={User} />
        </Switch>
      </Router>
    </GithubState>
  );
};
export default App;
