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
    gallery : ['https://pbs.twimg.com/profile_images/378800000698555148/4cb16163b698dfdb827a9b4053a60afd.jpeg']
},
{
    name : 'Whitney Houston',
    description : 'I will always love you',
    genre : 'Soul',
    albums : [
        {name : 'My first Album', year : 1979}
    ],
    gallery : ['https://pbs.twimg.com/profile_images/378800000698555148/4cb16163b698dfdb827a9b4053a60afd.jpeg']
}]

Artist.create(artists)
    .then((result) => {
        console.log('created')
    })
    .catch((err) => {
        console.log(err);
    })



    let bars = [{
        name : 'Sala Pepe',
        description: 'Coqueto local con música en directo',
        location: 'Aquí al lao',
        capacity: 10,
        gallery: 'https://www.esloqueveo.com/thumbnail.aspx?p_registro=145227&p=0&t=33'
    },
    {
        name : 'Sala Pepe',
        description: 'Coqueto local con música en directo',
        location: 'Aquí al lao',
        capacity: 100,
        gallery: 'https://www.esloqueveo.com/thumbnail.aspx?p_registro=145227&p=0&t=33'
    }
]

Bar.create(bars)
    .then((result) => {
        console.log('created')
    })
    .catch((err) => {
        console.log(err);
    })
