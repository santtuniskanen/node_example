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
<pre>
app.get('/example/:fname?')
</pre>

The variable can be accessed with <pre>request.params.{variable}</pre>
<pre>
app.get('/example2/:fname?', function(request, response){
    response.send("Hello "+request.params.fname)
});
</pre>