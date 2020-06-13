import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner/Spinner';
import githubContext from '../../context/github/githubContext';
export default function Users() {
  const context = useContext(githubContext);
  const { loading, currentUsers } = context;
  return (
    <div className='flex flex-wrap w-11/12 mx-auto my-16'>
      {loading ? (
        <Spinner />
      ) : (
        currentUsers.map((user) => <UserItem key={user.id} user={user} />)
      )}
    </div>
  );
}

// Users.propTypes = {
//   users: PropTypes.array.isRequired,
//   loading: PropTypes.bool.isRequired,
// };
