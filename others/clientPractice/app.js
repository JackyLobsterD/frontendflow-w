const http = require('http');
const fs = require('fs');
const testFolder = './templates/';


// fs.readFile('./package.json', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });

// var readStream = fs.createReadStream('./package.json')
//
// readStream.on('open', function () {
//     console.log('open')
// });


const options = {
    hostname: '3.12.119.235',
    port: 8001,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

console.log('req');
const url=require('url')
console.log(url.resolve('http://baidu.com/one/two/three', '/four/asdf'));
const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
    // res.on('data', d => {
    //     process.stdout.write(d)
    // })
});

// readStream.pipe(req)
// req.pipe(readStream)


req.on('error', error => {
    if(error)throw error;
});
req.end();
