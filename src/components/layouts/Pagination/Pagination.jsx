import React from 'react';
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
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
