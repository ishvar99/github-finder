import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../layouts/Spinner/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../Repos';
import './User.css';
const User = ({ user, getUser, getUserRepos, loading, repos, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  return loading ? (
    <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
      <Spinner />
    </div>
  ) : (
    <div className='text-xl container w-10/12 md:w-8/12 lg:w-6/12 mx-auto my-24'>
      <Link
        to='/'
        className=' bg-gray-700 hover:bg-gray-800 font-bold text-white btn mr-24 rounded'
      >
        Back To Search
      </Link>
      <strong className='text-gray-700 text-2xl'>Hireable: </strong>
      {hireable ? (
        <i className='text-2xl fas fa-check text-success' />
      ) : (
        <i className='text-2xl fas fa-times-circle text-danger' />
      )}
      <div className='card grid'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1 className='font-bold text-2xl w-5/12  text-center'>{name}</h1>
          <p className='text-xl  w-5/12 text-center'>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <strong>Biography:</strong>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={html_url}
            className='text-center btn bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded  my-1 font-bold rounded'
          >
            Visit Github Profile
          </a>
          <ul>
            <li className='text-xl'>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li className='text-xl'>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li className='text-xl'>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge bg-blue-500'>Public Repos: {public_repos}</div>
        <div className='badge bg-orange-500'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};
User.prototype = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
