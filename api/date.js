const moment = require('moment');
const axios = require('axios');

module.exports = async (req, res) => {
  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

  const result = (await axios.default.get('https://reqres.in/api/users?page=2'))
    .data;

  res.end(JSON.stringify({ currentTime, result }));
};
