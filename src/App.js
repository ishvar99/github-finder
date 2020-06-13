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
  // const usersPerPage = 9;
  // const [currentUsers, setcurrentUsers] = useState([]);
  // const [repos, setrepos] = useState([]);
  // const [user, setuser] = useState({});
  // const [allUsers, setallUsers] = useState([]);
  // const [loading, setloading] = useState(false);
  // const getUser = async (username) => {
  //   setloading(true);
  //   const response = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
  //   );
  //   setuser(response.data);
  //   setloading(false);
  // };
  // const getUserRepos = async (username) => {
  //   setloading(true);
  //   const response = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
  //   );
  //   setrepos(response.data);
  // };
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
          <Route
            exact
            path='/user/:login'
            render={(props) => {
              return (
                <User
                // repos={repos}
                // {...props} //we pass props to access match property of props in user component
                // getUser={getUser}
                // getUserRepos={getUserRepos}
                // user={user}
                // loading={loading}
                />
              );
            }}
          />
        </Switch>
      </Router>
    </GithubState>
  );
};
export default App;
