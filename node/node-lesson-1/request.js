const axios = require('axios');

const url = 'http://127.0.0.1:3000';

async function request(n, type) {
  for (let i = 0; i < n; i++) {
    if (type === 'sync') {
      let res = await axios.get(url);
      console.log(type, i, res.statusText);
    }
    else {
      axios.get(url).then((res) => {
        console.log(type, i, res.statusText);
      });
    }
  }
}

request(20, 'async');
request(20, 'sync');
