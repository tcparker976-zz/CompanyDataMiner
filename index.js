const fetch = require('node-fetch');

fetch('https://s3-us-west-2.amazonaws.com/bain-coding-challenge/data.json')
    .then(response => response.json())
    .then(data => console.log(data));