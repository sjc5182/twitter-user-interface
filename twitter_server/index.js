console.log('my server is starting')
const config = require('./config')
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const Twitter = require('twitter');


const app = express()
const client = new Twitter(config);

const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const params = {
  q: 'Supply Chain',
  count: 15
}

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/handle', function(req, res){
  client.get('search/tweets', params, function(err, data, response){
    if(err) throw err;
    var result = data.statuses;
    res.send(result)
  })
})

app.post('/usertweets', function(req, res){
  const nameObj = req.body
  const params2 = {
    screen_name: nameObj.name,
    count: 3
  }
  client.get('statuses/user_timeline', params2, function(err, data, response){
    if(err) throw err;
    res.send(data)
  })
})




