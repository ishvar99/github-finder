import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Search(props) {
  const [text, setText] = useState('');

  const onSumbit = (e) => {
    e.preventDefault();
    props.searchUsers(text);
  };
  return (
    <div className='container mx-auto w-10/12 sm:w-9/12 md:w-9/12 lg:w-7/12 my-24'>
      <form onSubmit={onSumbit}>
        <input
          onChange={(event) => setText(event.target.value)}
          className='w-full border p-4 rounded focus:outline-none focus:shadow-outline border-gray-400'
          type='text'
          name='text'
          placeholder='Search for users...'
        />
        <br />
        <input
          className='w-full py-4 outline-none my-4 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded'
          style={{ cursor: 'pointer' }}
          type='submit'
          value='Search'
        />
      </form>
    </div>
  );
}
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
};
