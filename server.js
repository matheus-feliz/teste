const express = require('express')
const app = express();
//
app.use(express.static(__dirname + '/dist/'))
//
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/dist/index.html')
})

app.listen(PORT,function(){
console.log('http://localhost:'+PORT)
})