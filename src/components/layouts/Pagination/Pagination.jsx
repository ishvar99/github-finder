import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import './Pagination.css';
import githubContext from '../../../context/github/githubContext';
export default function Pagination() {
  console.log('Pagination');
  const context = useContext(githubContext);
  let pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(context.allUsers.length / context.usersPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <>
      {context.currentUsers.length > 0 && (
        <ul className='pagination pagination-lg'>
          {pageNumbers.map((number) => {
            return (
              <li key={number}>
                <button onClick={() => context.paginate(number)}>
                  {number}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

// Pagination.propTypes = {
//   usersPerPage: PropTypes.number.isRequired,
//   allUsers: PropTypes.number.isRequired,
//   paginate: PropTypes.func.isRequired,
// };
