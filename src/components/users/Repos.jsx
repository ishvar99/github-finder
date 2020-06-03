import React from 'react';
import RepoItem from './RepoItem';
export default function Repos({ repos }) {
  return (
    <div>
      {repos.map((repo) => {
        return <RepoItem key={repo.id} name={repo.name} />;
      })}
    </div>
  );
}
