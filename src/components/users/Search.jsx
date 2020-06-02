import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Search({ searchUsers, clearUsers, showClear }) {
  const [text, setText] = useState('');

  const onSumbit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      document.getElementById('search').focus();
      return;
    }
    searchUsers(text);
  };
  return (
    <div className='container mx-auto w-10/12 sm:w-9/12 md:w-9/12 lg:w-7/12 my-24'>
      <form onSubmit={onSumbit}>
        <input
          onChange={(event) => setText(event.target.value)}
          className='w-full border p-4 rounded focus:outline-none focus:shadow-outline border-gray-400'
          type='text'
          id='search'
          name='text'
          placeholder='Search for github users...'
        />
        <br />
        <input
          className='w-full py-4 focus:2outline-none my-4 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded'
          style={{ cursor: 'pointer' }}
          type='submit'
          value='SEARCH'
        />
      </form>
      {showClear && (
        <button
          onClick={() => {
            const searchBox = document.getElementById('search');
            searchBox.value = '';
            setText('');
            searchBox.focus();
            clearUsers();
          }}
          className='w-full py-4 focus:outline-none my-4 bg-gray-300 hover:bg-gray-400 font-bold rounded'
        >
          CLEAR
        </button>
      )}
    </div>
  );
}
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};
