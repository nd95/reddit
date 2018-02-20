
// server.js
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const port = 5000;
var http = require('http');
app.use(bodyParser.urlencoded({ extended: true }));
var search = "";
var myJSON;


'use strict';
var request = require('request');
var url = 'https://www.reddit.com/r/ProgrammingHumor/top/.json';

//takes in second commandline argument as the search param

if(process.argv.length != 3 )
  {
  	console.log("invalid number of args need 3");
  	process.exit();
  }
  
search = process.argv[2];


request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, req, data) =>
   {
	    if (err) 
	    {
	      console.log('Error:', err);
	    } else if (req.statusCode !== 200) 
	    {
	      console.log('Status:', res.statusCode);
	    } else 
	    {

	      //check for subreddit, id, author, url, title, 
	        var iteration = data.data.children;
	        var id = "id";
	        var subreddit = "subreddit";
	        var author1 = "author";
	        var url1 = "url";
	        var title = "title";
       
	        var searchQry = search;
	        console.log(searchQry);

	        for(var i = 0; i < data.data.children.length; i++)
	            {
	                if(iteration[i].data.subreddit == searchQry ||
	                	iteration[i].data.id == searchQry ||
	                	iteration[i].data.author == searchQry ||
	                	iteration[i].data.url == searchQry ||
	                	iteration[i].data.title == searchQry)
	                    {
	                    	
	                    	var ipID = {[title] :iteration[i].data.title, [author1] :iteration[i].data.author,
	                    				[url1] :iteration[i].data.url, [id] :iteration[i].data.id,	 [subreddit] :iteration[i].data.subreddit }
	                        
	                        myJSON += JSON.stringify(ipID);
	                    }     	

	            }
	       http.createServer(function (request, response) {
    		response.writeHead(200, {"Content-Type": "application/json"});
   			 response.end(myJSON);
			}).listen(5000);
	    } 
	}
);


 



