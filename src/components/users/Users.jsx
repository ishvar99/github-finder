import React from 'react';
import UserItem from './UserItem';

const Users = ({ users }) => {
  return (
    <div className='flex flex-wrap w-11/12 mx-auto my-24'>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
