var express = require('express');
var router = express.Router();

var Twitter = require('twitter');
var config = require('../config.js');
var T = new Twitter(config);

function stats (screenName) {
  return new Promise((resolve, reject) => {

	var params = {
		count: 30,
		lang: 'en',
		screen_name: screenName,
	}

	// Initiate your search using the above paramaters 
	T.get('statuses/user_timeline', params, function(err, data, response) {

		// If there is no error, proceed
		if(!err){

			var ta = require('../node_modules/time-ago/timeago.js')
			var Tweet = require("../models/Tweet.js");
			var list = [];
				list[screenName] = [];
			for(let i = 0; i < data.length; i++) {
				var content = data[i].text;
				var created_at = ta.ago(data[i].created_at);
				var link = '';
				if(typeof data[i].entities.urls[0] !== 'undefined')
					link = data[i].entities.urls[0].expanded_url;
				var username = screenName; // todo
				
				// Creates the tweet using the constructor functions
				var tweet = new Tweet(content, created_at, link, username);
				list[screenName].push(tweet);
			}

			resolve(list)

		} else {
			//ret.err = err;
			console.log(ret);
			return reject (err)
		}
	});

  })
}

Promise.all([
  stats('MakeSchool'),
  stats('newsycombinator'),
  stats('ycombinator')
])
.then(function(data){
	// console.log(data);\
	router.get('/', function(req, res, next) {
		res.render('index', { tweets: data});
	});
})
.catch((err) => console.log(err))

module.exports = router;