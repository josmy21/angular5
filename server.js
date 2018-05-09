var express = require('express');
var path = require('path');
var router = express.Router();
var app = express();

app.use(express.static('./dist'));
app.use('/*', express.static(path.resolve('dist/index.html')));

router.get('*', function(req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

console.log('Server up and running on http://localhost:3000/');
app.listen(3000);