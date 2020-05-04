const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

function readFile(path) {
    var data = fs.readFileSync(path);
    return data;
}

function writeFile(path, data){
    fs.writeFileSync(path, data);
}

var server = app.listen(8081, function(){
    var address = server.address().address;
    var port = server.address().port;

    console.log("Server running on address %s and port %s", address, port);
});

// root endpoint
app.get('/', function(request, response){
    response.send("Hello World");
});

// users endpoint
app.get('/users', function(request, response){
    var data = readFile('./persons.json');
    response.send(JSON.parse(data));
});

app.put('/users', function(request, response){
    // ler ficheiro
    var data = JSON.parse(readFile('./persons.json'));
    // contar chaves/entradas no JSON lido
    var size = Object.keys(data).length;
    // incrementar o tamanho
    size++;

    // aceder ao que foi enviado no body no postman
    var person = request.body;

    // adicionar novo atributo id
    person.id = size;

    // adicionar nova pessoa ao objeto json lido do ficheiro
    data["person" + size] = person;

    // re-escrever o ficheiro com o objeto json e a nova pessoa
    writeFile('./persons.json', JSON.stringify(data));

    // enviar a resposta ao pedido PUT http
    response.send(person);
});

app.delete('/users/:id', function(request, response){
    var data = JSON.parse(readFile('./persons.json'));
    var id = request.params.id;
    delete data['person' + id];
    writeFile('./persons.json', JSON.stringify(data));
    response.send(data);
});

app.get('/users/:id', function(request, response){
    var data = JSON.parse(readFile('./persons.json'));
    var id = request.params.id;
    var person = data['person' + id];

    if(person == undefined){
        response.send("PERSON NOT FOUND");
    }
    else{
        response.send(person);
    }
});

app.post('/users/:id', function(request, response){
    var data = JSON.parse(readFile('./persons.json'));
    var id = request.params.id;
    var person = data['person' + id];

    if(person == undefined){
        response.send("PERSON NOT FOUND");
    }
    else{

        data["person" + id] = request.body;
        data["person" + id].id = id;
        writeFile('./persons.json', JSON.stringify(data));
        response.send(data["person" + id]);
    }
});
