import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/Search';
import Pagination from './components/layouts/Pagination/Pagination';
import About from './components/layouts/About';
import User from './components/Users/User/User';
import GithubState from './context/github/GithubState';
const App = () => {
  return (
    <GithubState>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => {
              return (
                <Fragment>
                  <Search />
                  <Users />
                  <Pagination />
                </Fragment>
              );
            }}
          />
          <Route exact path='/about' component={About} />
          <Route exact path='/user/:login' component={User} />
        </Switch>
      </Router>
    </GithubState>
  );
};
export default App;
