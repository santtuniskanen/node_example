# Node Examples

## HTTP Get

get-endpoints can be defined like this in Express
<pre>
app.get('/endpoint')
</pre>

A word can be turned into a variable with a colon
<pre>
app.get('/example/:fname')
</pre>

The variable must be added to the link, otherwise it will throw a GET error.
This can be fixed by adding a question mark after the variable name.
Then it would display "undefined" in the place of name.
<pre>
app.get('/example/:fname?')
</pre>

The variable can be accessed with <pre>request.params.{variable}</pre>
Example
<pre>
app.get('/example2/:fname?', function(request, response){
    response.send("Hello, "+request.params.fname)
});
</pre>

## Middleware function

Middleware is a function which is called automatically and its definition is 
done with the word **use**.

Middleware is required in order for our application to be able to handle JSON data.
<pre>
app.use(express.json());
</pre>

It's also needed in order to send "form-urlencoded" data with
POST and PUT methods.
<pre>
app.use(express.urlencoded({encoded:false}));
</pre>

# express_database_example

## Connection to database

Root user isn't preferable, rather create something else
<pre>
create user 'tvt22spo'@localhost' identified by 'tvtpass';
grant all on library.* to 'tvt22spo'@localhost';
</pre>

## .env

The file .env isn't usually brought to GitHub, since it can contain sensitive information eg. the authentication to your database. You can include so called environment variables inside the .env file, like in this case:
<pre>
port=3000
mysqlString="mysql://{user}:{pass}@localhost:3306/library"
</pre>
You can point to these variables in your code like this
<pre>
process.env.port
process.env.mysqlString
</pre>