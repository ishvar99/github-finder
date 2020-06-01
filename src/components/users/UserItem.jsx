import React, { Component } from 'react';

export class UserItem extends Component {
  state = {
    id: 'id',
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo',
  };
  render() {
    const { id, login, avatar_url, html_url } = this.state;
    return (
      <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
        <div className='h-full flex items-center border-gray-300 border p-4 m-2 rounded-lg'>
          <img
            alt='team'
            className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
            src={avatar_url}
          />
          <div className='flex-grow'>
            <h2 className='text-gray-900 title-font font-medium'>{login}</h2>
          </div>
          <a
            href={html_url}
            className='bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded '
          >
            Profile
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
