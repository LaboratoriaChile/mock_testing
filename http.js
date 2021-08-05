const axios = require('axios');

const fetchData = () => {
  console.log("REAL");
  return axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
}

exports.fetchData = fetchData;