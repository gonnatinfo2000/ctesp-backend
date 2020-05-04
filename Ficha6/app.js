const express = require("express");
const fs = require("fs");

// Create express instance

// Chama um construtor para criar uma instancia
const app = express();

function log(request, response){
    var info = request.path + ", " + request.method + ", " + new Date() + "\n";
    fs.appendFileSync('./log.txt', info);
    //console.log(info);
};

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
  
    // criar o ficheiro de log 
    fs.open('log.txt', 'a', function(err, fd){
        console.log("File was created " + fd);
    });

    console.log("Example app listening at http://%s:%s", host, port);  
});

app.get('/', function(request, response){
    log(request, response);
    // var body = "Hello World!";
    var page = "<!DOCTYPE html><html><head><title>Page Title</title></head><body><h1>This is a Heading</h1><p>{Message}</p></body></html>";
    var date = new Date();

    //var file = fs.readFileSync('./index.html', 'utf-8');
    page = page.replace("{Message}", date.toDateString());

    response.writeHead(200, {
        "Content-Length": Buffer.byteLength(page),
        "Content-Type": "text/html"
        // A diferença é o tipo do ficheiro
    });
    response.end(page);
});

app.get("/user/:name", function(request, response){
    log(request, response);
    response.send("Welcome: " + request.params.name + "!");
});

app.get("/log", function(request, response){
    var file = fs.readFileSync("./log.txt", "utf-8");
    response.writeHead(200, {
        "Content-Length": Buffer.byteLength(file),
        "Content-Type": "text/plain"
    });
    response.end(file);
});

app.get("/log.txt", function(request, response){
    response.download("./logasasasa.txt", function(err){
        if(err){
            //response.end("O ficheiro que tentou aceder não existe");
            response.status(404);
            response.end(err.message);
        }else{
            // decrementar o crédito do user por ter feito o download do livro
        }
    });
});

// arrow function
app.get("/clear", (request, response) => {
    fs.unlinkSync("./log.txt");
    response.send("O fihceiro foi apagado.");
});
