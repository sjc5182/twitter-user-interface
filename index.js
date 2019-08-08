console.log('my server is starting')
const express = require('express');
const Twitter = require('twitter');
const config = require('./config')
const client = new Twitter(config);

const app = express()
const port = process.env.PORT || 5000

const params = {
  q: 'beers',
  count: 6
}

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/handle', function(req, res){
  client.get('search/tweets', params, function(err, data, response){
    if(err) throw err;
    var result = data.statuses;
    res.send(result)
  })
})


