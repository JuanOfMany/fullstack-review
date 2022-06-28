const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const getReposByUsername = require('../helpers/github.js').getReposByUsername

// console.log(getReposByUsername('defunkt'))

let repoSchema = mongoose.Schema(
  {
    owner: 'string', //(owner.login)
    name: 'string', //name
    githubId: 'string', //id
    stars: 'number', //stargazers_count
    forks: 'number', //forks_count
    url: 'string', //html_url
    description: 'string' //description
    }
);

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {

  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;