// The code repository does not come with any package.json
// This is standard within any kind of node environment to
// make sure that other developers can use the package
// tooling available to bootstrap the server environment
// with all of the dependencies used.


// server.js
const express        = require('express');
const bodyParser     = require('body-parser');
const fetch          = require('node-fetch');
const app            = express();
const port = 5000;
// var here is a little inconsistant with the es6 style
// if you expect the value to not be reasigned use const as above.
var http = require('http');
app.use(bodyParser.urlencoded({ extended: true }));
var search = ""; // Same comment as above re const, let, var
var myJSON;


'use strict'; // This should be lifted to the top of the file

// takes in second commandline argument as the search param
// Conditionals should be formatted like so in js: 
// if(true){
		// SCOPED BLOCK OFF CODE TO EXECUTE HERE
//} 
// if(process.argv.length != 3 )
//   {
// 		// This error message should either include and example of the input
// 		// or print a command that allows the operator to view the commandline 
// 		// instructions for your executable
//   	console.log("invalid number of args need 3"); 
//   	process.exit();
// 	}

// This is why let and const is so important within the new standard
// let search = "" on line 11 would have allowed us to immediatly know
// this is being reassigned. With that said, this should be decalred here, 
// removed from line 11, and declared with a const variable. If we're running
// this as a one time executable the "search" should not change between the time of
// execution and the time that the process exits
search = process.argv[2];


// The purpose of this exercise was to build an api with a single route defined.
// EX: app.get('/', (req, res) => res.send('Hello World!'))
// The above example would expose a single / handler to permitted clients, returning
// the string Hello World. Frontloading the request as you have done and then exposing
// the endpoint has the limitations you stated in github ie: must restart the server
app.get('/', (req, res) => res.send('Hello World!'))
// For the challenge, we expected you to build an endpoint within the specifications
app.get('/redditer/:search', (req, res) => {
	// Within this block we now have access to our params as an object req.params. ex:
	// http://localhost:5000/redditer/pizza would allow us this object req.params: {"search": "pizza"}
	// This is the block that you would then use your custom logic or program to make the reddit request
	// and return the response back to the user.

	// Here is an example of a quick function that uses the native fetch utility to make
	// requests on your behalf and could handle all types of errors and poor results from the 
	// json service you're interacting with. If you liked the project I highly reccomend you 
	// read and understand not just what this code is doing from a JS perspective, but from
	// a more macro perspective so you're able to implement it in languages you might prefer or
	// be learning. We could just place this within our app.get route OR we could put it into 
	// our getReddit function since there is probably more we want to do after the response
	// has finished.
	const { search } = req.params
	getReddit('https://jsonplaceholder.typicode.com/posts/1')
	return res.send(`You searched ${search}`)
});

async function getReddit(url) {
	console.log('calling reddit');
	const json = await fetchMyStuff(url);
	console.log(json)
} 

function fetchMyStuff (url) {
	const options = {
    method: 'GET',
  };
	const response = fetch(url, options)
	.then(response => response.ok ? response.json() : Promise.reject(response.text()))
	.then(
		json => json
	)
	return response;
}

// It would be better to wrap the below code within a function you have control over
// This will allow you to design the program better and have agency over when request 
// is actually called.}

// I commented out this code since the implementation above should give you a better understanding
// of defining your own functions to be called rather than executing them a runtime of the server

// This should also be reformatted. I would encourage if you're doing another js project in the future to 
// Use a linter like ESLINT or other popular ones. This will give you a microsoft word like underline
// when code is outside the style of gudies developed by google, airbnb, facebook, or other orgnaizations
// that an enterprise might subscribe to as far as code quality knowledge goes.

// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, req, data) =>
//    {
// 	    if (err) 
// 	    {
// 	      console.log('Error:', err);
// 	    } else if (req.statusCode !== 200) 
// 	    {
// 	      console.log('Status:', res.statusCode);
// 	    } else 
// 	    {

//check for subreddit, id, author, url, title,
// This operation should be broken into it's own function that is called within the context established above for the route 
// var iteration = data.data.children;
// var id = "id";
// var subreddit = "subreddit";
// var author1 = "author";
// var url1 = "url";
// var title = "title";

// var searchQry = search;
// console.log(searchQry);

// for(var i = 0; i < data.data.children.length; i++){
// 	// Nice job accounting for all of the parameters
// 	// A good trick with programming would be to write
// 	// a more readable function these extracts this into 
// 	// an array and then checks if the query is in it
// 	if(iteration[i].data.subreddit == searchQry ||
// 		iteration[i].data.id == searchQry ||
// 		iteration[i].data.author == searchQry ||
// 		iteration[i].data.url == searchQry ||
// 		iteration[i].data.title == searchQry){
		
// 		ipID = {[title] :iteration[i].data.title, [author1] :iteration[i].data.author, [url1] :iteration[i].data.url, [id] :iteration[i].data.id,	 [subreddit] :iteration[i].data.subreddit }	
// 			myJSON += JSON.stringify(ipID);
// 		}
// }

// We can now remove this for a cleaner 
// http.createServer(function (request, response) {
//     		response.writeHead(200, {"Content-Type": "application/json"});
//    			 response.end(myJSON);
// 			}).listen(5000);
// 	    } 
// 	}
// );

app.listen(3000, () => console.log('Redditer app listening on port 3000!'))