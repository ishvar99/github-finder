import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';
export default function Pagination({ usersPerPage, allUsers, paginate }) {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className='pagination pagination-lg'>
      {pageNumbers.map((number) => {
        return (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        );
      })}
    </ul>
  );
}

Pagination.propTypes = {
  usersPerPage: PropTypes.number.isRequired,
  allUsers: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
