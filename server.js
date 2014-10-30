var express = require('express');
var router = express.Router();
var app = module.exports = express();

// app.configure(function(){
//   // Here we require the prerender middleware that will handle requests from Search Engine crawlers
//   // We set the token only if we're using the Prerender.io service
//   app.use(require('prerender-node').set('prerenderToken', 'YOUR API TOKEN HERE!'));
//   app.use(express.static("public"));
//   app.use(app.router);
// });

app.use(require('prerender-node').set('prerenderToken', 'MqMxhIyu20yV9Yvypb0L'));
app.use(express.static("public"));
app.use(router);

// This will ensure that all routing is handed over to AngularJS
app.get('*', function(req, res){
	res.sendFile('public/index.html', {root: __dirname});
});

app.listen(8081);
console.log("Go Prerender Go!");