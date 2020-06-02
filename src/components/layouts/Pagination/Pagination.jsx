import React from 'react';
import './Pagination.css';
export default function Pagination({ usersPerPage, totalUsers, paginate }) {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul class='pagination pagination-lg'>
      {pageNumbers.map((number) => {
        return (
          <li>
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
