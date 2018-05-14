
const express = require('express');
const path = require('path')
const fs = require('fs');
const  app = express();

app.use(express.static( path.join(__dirname, 'public')));
app.get('/', (req, res)=> {
    res.sendFile('./index.html');
});

app.get('/data',  (req, res)=> {
  //  const  readStream = fs.createReadStream('./codpaste-teachingpack.pdf');
  const  readStream = fs.createReadStream('./hkube overview.pdf');
    res.writeHead(200, {
        'Transfer-Encoding': 'chunked',
        'Content-Length': 8000000
    });
        readStream.on('open', function () {
            readStream.pipe(res);
          });
    });

app.listen(3005);