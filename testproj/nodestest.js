// content of index.js
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  var MongoClient = require('mongodb').MongoClient;
  //var url = "mongodb://localhost:27017/myFirstDB";
  var url = "mongodb://localhost:27017/test";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var query = { address: "Park Lane 38" };
    //db.collection("contacts").find(query).toArray(function(err, result) {
      db.collection("contacts").find().toArray(function(err, result) {
      if (err) throw err;
        console.log('this is my mongo muthhe!! ',result);
      db.close();
    });
  });
  

  console.log(`server is listening on ${port}`)
})




