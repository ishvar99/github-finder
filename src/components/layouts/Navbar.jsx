import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar({ icon, title }) {
  return (
    <>
      <header className='text-gray-700 body-font bg-black'>
        <div className='container mx-5 flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link
            to='/about'
            className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
          >
            <Link to='/'>
              <i className={classNames(icon, 'text-white', 'text-4xl')}></i>
            </Link>
            <span className='ml-3 text-xl text-white'>{title}</span>
          </Link>
        </div>
      </header>
    </>
  );
}
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
