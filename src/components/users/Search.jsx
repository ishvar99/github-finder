import React from 'react';

export default function Search() {
  return (
    <div className='container mx-auto my-24'>
      <form>
        <input
          className='w-11/12 border p-4 rounded'
          type='text'
          placeholder='Search for users...'
        />
        <br />
        <input
          className='w-11/12 py-4 mx-auto my-4 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded '
          style={{ cursor: 'pointer' }}
          type='submit'
        />
      </form>
    </div>
  );
}
