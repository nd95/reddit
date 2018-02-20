# reddit
JSON 
Hi here is my JSON viewer server

to run this have node installed

node server.js SEARCH_REQUEST


SEARCH_REQUEST is a custom command line argument

if I want to search the whole subreddit I can run my program on the terminal

node server.js ProgrammingHumor

then go to localhost:5000

and the displayed json objects should be there.

It searches through the subreddit, id, author, url and title.

if none of those fields match your argument nothing will return on localhost:5000.


KNOWN BUGS:
if you want to do another search you must exit out of the program before hand (cntrl + c)
and run the program again but with your designated search param.
