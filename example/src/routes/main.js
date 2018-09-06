module.exports = function(app, fs){
    app.get('/', function(req, res){
        res.writeHead(200, {"Content-Type":"application/json; charset=utf-8"});
        res.end(JSON.stringify({"test":"example"}));
    });
}