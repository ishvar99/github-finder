import React, { Fragment } from 'react';
import Users from '../../Users/Users';
import Search from '../../Users/Search';
import Pagination from '../../layouts/Pagination/Pagination';
const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
      <Pagination />
    </Fragment>
  );
};
export default Home;
