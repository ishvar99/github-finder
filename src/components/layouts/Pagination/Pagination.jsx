import React from 'react';
import './Pagination.css';
export default function Pagination({ usersPerPage, totalUsers }) {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <div className='pagination'>
      {pageNumbers.map((pageNumber) => {
        return (
          <a key={pageNumber} href='!#'>
            {pageNumber}
          </a>
        );
      })}
    </div>
  );
}
