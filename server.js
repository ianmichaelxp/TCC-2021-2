var http = require("http"),
    app = require("./server/config/express");

http.createServer(app).listen(5000, function() {
    console.log("Servidor estutando na porta: " + this.address().port);


});