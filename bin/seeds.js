const mongoose = require('mongoose');
require('../configs/db.configs');

const User = require('../model/user.model');
const Artist = require('../model/artist.model');
const Bar = require('../model/bar.model');

let artists = [{
    name : 'Whitney Houston',
    description : 'I will always love you',
    genre : 'Soul',
    albums : [
        {name : 'My first Album', year : 1979}
    ],
    gallery : ['https://www.google.es/search?q=whitney+houston&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjAnpynkcfcAhUPUlAKHfcJB3gQ_AUICigB&biw=1280&bih=703#imgrc=sPb_0CAy3cSz0M:']
},
{
    name : 'Whitney Houston',
    description : 'I will always love you',
    genre : 'Soul',
    albums : [
        {name : 'My first Album', year : 1979}
    ],
    gallery : ['https://www.google.es/search?q=whitney+houston&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjAnpynkcfcAhUPUlAKHfcJB3gQ_AUICigB&biw=1280&bih=703#imgrc=sPb_0CAy3cSz0M:']
}]

Artist.create(artists)
    .then((result) => {
        console.log('created')
    })
    .catch((err) => {
        console.log(err);
    })


// User.count()
//     .then(number => {
//         console.log('Users:', number)
//     })

// Artist.count()
//     .then(number => {
//         console.log('Artist:', number)
//     })