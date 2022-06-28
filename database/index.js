const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', function(){console.log('Mongoose Connected!')});
const getReposByUsername = require('../helpers/github.js').getReposByUsername


let repoSchema = mongoose.Schema(
  {
    owner: 'string', //(owner.login)
    name: 'string', //name
    githubId: {type : 'String', unique: true}, //id
    stars: 'number', //stargazers_count
    forks: 'number', //forks_count
    url: 'string', //html_url
    description: 'string' //description
    }
);

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoArr) => {
  let formattedRepoArr = [];
  repoArr.forEach(function(repo){
    let formattedRepoObj = {};
    formattedRepoObj.owner = repo.owner.login
    formattedRepoObj.name = repo.name
    formattedRepoObj.githubId = repo.id
    formattedRepoObj.stars = repo.stargazers_count
    formattedRepoObj.forks = repo.forks_count
    formattedRepoObj.url = repo.html_url
    formattedRepoObj.description = repo.description
    formattedRepoArr.push(formattedRepoObj)
  })
  // console.log(formattedRepoArr)
  Repo.insertMany(formattedRepoArr, function(err){
    console.error(err);
  });
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;
module.exports.Repo = Repo;