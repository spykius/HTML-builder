const fs = require('fs');
const path = require('path');
const pathToFile = path.join(__dirname, 'text.txt');
const input = fs.createReadStream(pathToFile, 'utf-8');

let data = '';

input.on('data', (chunk) => (data += chunk));
input.on('end', () => console.log(data));
input.on('error', (error) => console.log('Error', error.message));
