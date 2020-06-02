import React from 'react';
import './Pagination.css';
export default function Pagination({ usersPerPage, totalUsers, paginate }) {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className='pagination'>
      {pageNumbers.map((number) => {
        return (
          <li key={number}>
            <a href='!#' onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
