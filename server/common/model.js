var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'blog'
});
connection.connect(function(err){
    if(err) return;
});
exports.connection = connection;