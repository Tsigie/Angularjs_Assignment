var express = require('express')
    .http = require('htpp')
    .path = require('path')
    .reload = require('reload')

var app = express()  
var clientDir = path.join(__dirname, 'client')  

app.configure(function() {
    app.set('port'. process.env.PORT || 3000)
    app.use(express.favicon())
    app.use(express.logger('dev'))
    app.use(express.bodyParser())
    app.use(app.router)
    app.use(express.static(clientDir))
})

app.configure('development', function() {
    app.use(express.errorHandler());
})

app.get('/', function(req, res) {
    res.sendfile(path.join(clientDir, 'index.html'))
})

app.get('/api/cars', cars.list)

app.get('/api/cars/:id', cars.read)
app.post('/api/cars', cars.create)
app.put('/api/cars/:id', cars.update)
app.delete('/api/cars/:id', cars.delete)

var server = http.createServer(app)

reload(server, app)

server.listen(app.get('port'), function() {
    console.log("web server listening on port" + app.get('port'));
});