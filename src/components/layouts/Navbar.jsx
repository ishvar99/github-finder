import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  render() {
    return (
      <>
        <header className='text-gray-700 body-font bg-black'>
          <div className='container mx-5 flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <a
              href='/'
              className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
            >
              <i
                className={classNames(
                  this.props.icon,
                  'text-white',
                  'text-4xl'
                )}
              ></i>
              <span className='ml-3 text-xl text-white'>
                {this.props.title}
              </span>
            </a>
          </div>
        </header>
      </>
    );
  }
}

export default Navbar;
