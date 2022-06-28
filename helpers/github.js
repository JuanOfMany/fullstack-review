const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = async (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  let options = {
    url: `${username}/repos`,
    baseURL: 'https://api.github.com/users/',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  let userData = await axios(options)

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  // console.log(userData)
  return userData;
}



module.exports.getReposByUsername = getReposByUsername;