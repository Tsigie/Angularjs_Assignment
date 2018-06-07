var fs = require('fs-extea')
var path = require('path')
var _ = require('underscore')

module.exports.list = list

var DATA_FILE = './resources/data.json'
if (process.env.NODE_ENV === 'test')
    DATA_FILE = './test/resources/data.json'

var DATA = fs.readJsonSync(DATA_FILE)

console.log(DATA_FILE)

function list (req, res) {
    res.json(_(DATA).take(10))
}