const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});

app.get('/', function(request, response) {
    response.send("ROOT");
});

app.get('/persons', function(request, response) {
    connection.query('SELECT * FROM persons', function(error, results, fields){
        if (error) throw error;
        response.send(results);
    });
});

app.put('/persons', function(request, response){
     var person = (request.body); 

     connection.query('INSERT INTO persons SET ?', person, function(error, results, fields){
        if (error) throw error;
        response.send(" id inserido foi: " + results.insertId);
    }); 
    
});

app.delete('/persons', function(request, response){
    var sql = 'DELETE FROM persons WHERE id = ?';
    var id = request.body.id;
    
    connection.query(sql, id, function(error, results, fields){
       if (error) throw error;
       response.send("Affected rows:" + results.affectedRows);
   }); 
});

app.delete('/persons/:id', function(request, response){
    var sql = 'DELETE FROM persons WHERE id = ?';
    var id = request.params.id;
    
    connection.query(sql, id, function(error, results, fields){
       if (error) throw error;
       response.send("Affected rows:" + results.affectedRows);
   }); 
});

app.get('/persons/:id', function(request, response) {
    var id = request.params.id;
    connection.query("SELECT * FROM persons WHERE id = ?", id, function(error, results, fields){
        if (error) throw error;
        response.send(results);
    });
});

app.get('/persons/:age/:profession', function(request, response) {
    var age = request.params.age;
    var profession = request.params.profession;
    connection.query("SELECT * FROM persons WHERE age = ? AND profession = ?", [age, profession], function(error, results, fields){
        if (error) throw error;
        response.send(results);
    });
});

app.post('/persons/:id', function(request, response) {
    var id = request.params.id;
    var details = request.body;
    connection.query("UPDATE persons SET ? WHERE id = ?", [details, id], function(error, results, fields){
        if (error) throw error;
        response.send("Changed:", results.changedRows);
    });
});




