const SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste here your credentials
const clientId = '4c140d99814249c887e0e0ac58027d94',
 clientSecret = 'd616baa0c41a43c2809230beaa297c17'

const spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token'])) 
  .catch(err => console.log('Something went wrong when retrieving an access token', err));

