const fetch = require('node-fetch'); 
const fs = require('fs');
const path = require('path');
const handleCompanyData = require('./data-handler.js');
const args = process.argv.slice(2);

const fileName = args[0];
const command = args[1];
const query = args[2];

const filePath = path.join(__dirname, fileName);

if (fs.existsSync(filePath)) { // if the file path exists locally
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        const companies = JSON.parse(data.toString('utf8'));
        console.log(handleCompanyData(companies, command, query));
    });
} else if (fileName.includes('http')) { // assumes the file path was a URL and attempts to fetch
    fetch(fileName)
        .then(response => response.json())
        .then(companies => {
            console.log(handleCompanyData(companies, command, query));
        })
        .catch(err => console.error(err));
} else {
    console.log('Invalid file path. Please enter a local JSON file name or a URL to a JSON file.');
}