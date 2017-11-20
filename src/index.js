const twitter = require('twitter');

// use varible enviroments
const client = new Twitter({
  consumer_key: 'Cn8JWHZHbS45onO8X2z72g1Nx',
  consumer_secret: '5nCme4YK1aFMFzXbivlzR5PVbjhUTYMtdQpes2yQUN5P6qLRXs',
  access_token_key: '3407656973-7GHlOHWNHAwky9WlvekumkKMvk1INmxZgBEZAuL'.
  access_token_secret: 'OJSQ5ajAUiLkhWrQgX9u6RP2st1VLb1abhKYfILEwKL2x'
});

client.post('/statuses/update', {
  status: 'A tweet from an App with Nodejs!'
}).then(tweet => {
  console.log(tweet);
}).catch(err => {

});
