import React from 'react';

const RepoList = (props) => {
  let wholeList = props.repos
  let top25 = wholeList.slice(0,25)
  let repoList = top25.map((repo) =>
  <tr key={repo._id}>
    <td><a href={repo.url} target='_blank'>{repo.name}</a></td>
    <td>{repo.description}</td>
    <td>{repo.owner}</td>
    <td>{repo.stars}</td>
    <td>{repo.forks}</td>
  </tr>)
  return (
  <div>
    There are {props.repos.length} repos.
    <h4> Repo List Component </h4>
    <table>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Owner</th>
          <th>Stars</th>
          <th>Forks</th>
        </tr>
      {repoList}
      </tbody>
    </table>
  </div>
  )
  }


export default RepoList;