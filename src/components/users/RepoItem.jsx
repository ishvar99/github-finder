import React, { useEffect } from 'react';

export default function RepoItem({ repo: { name, html_url } }) {
  useEffect(() => {});
  return (
    <div className='card'>
      <a className='text-xl font-bold' href={html_url}>
        {name}
      </a>
    </div>
  );
}
