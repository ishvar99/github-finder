import React, { Component } from 'react';
import UserItem from './UserItem';
export class Users extends Component {
  render() {
    return (
      <div className='flex flex-wrap w-9/12 mx-auto my-24'>
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    );
  }
}

export default Users;
