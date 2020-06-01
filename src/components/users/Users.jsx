import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner/Spinner';
const Users = ({ users, loading }) => {
  return (
    <div className='flex flex-wrap w-11/12 mx-auto my-24'>
      {loading ? (
        <Spinner />
      ) : (
        users.map((user) => <UserItem key={user.id} user={user} />)
      )}
    </div>
  );
};

export default Users;
