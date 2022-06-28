import React from 'react';

const RepoList = (props) => {
  console.log(props)
  let repoList = props.repos.map((repo) =>
  <li>
    <div><a href={repo.url}>{repo.name}</a></div>
    <div>{repo.owner}</div>
  </li>)
  return (
  <div>
    <h4> Repo List Component </h4>
    <ul>{repoList}</ul>
    There are {props.repos.length} repos.
  </div>
  )
  }


export default RepoList;