const mongoose = require('mongoose');
require('../configs/db.configs');

const User = require('../model/user.model');
const Artist = require('../model/artist.model');
const Bar = require('../model/bar.model');
const Event = require('../model/event.model');

let artists = [{
    name : 'Whitney Houston',
    description : 'I will always love you',
    genre : 'Soul',
    gallery : ['https://pbs.twimg.com/profile_images/378800000698555148/4cb16163b698dfdb827a9b4053a60afd.jpeg']
},
{
    name : 'Rocio Jurado',
    description : 'Como una ola',
    genre : 'Flamenco',
    gallery : ['https://c-sf.smule.com/sf/s29/arr/e8/97/1a5a2d0e-84c2-432d-a682-768cec72bfd8.jpg']
},
{
    name : 'Bruno Mars',
    description : 'When I was you men',
    genre : 'Pop',
    gallery : ['https://pbs.twimg.com/profile_images/2895653460/18c2a82c4a73b301da0b95ca697a12cf.png']
},
{
    name : 'Imagine Dragons',
    description : 'This is it, the apocalypse.',
    genre : 'Rock',
    gallery : ['https://c-sf.smule.com/sf/s80/arr/c2/e4/6bfa0547-b45c-4dfe-affa-543d36c84afb.jpg']
},
{
    name : 'Jessie J',
    description : 'Who you are',
    genre : 'Pop',
    gallery : ['https://c-sf.smule.com/sf/s19/arr/6e/5b/b26356fd-1a48-4c3d-9e3a-45e4a36616a7.jpg']
},
{
    name : 'Las Ketchup',
    description : 'Asereje ja de je',
    genre : 'Acoustic',
    gallery : ['https://ichef.bbci.co.uk/images/ic/256x256/p01btd97.jpg']
}]

Artist.create(artists)
    .then((result) => {
        console.log('created')
    })
    .catch((err) => {
        console.log(err);
    })


    let bars = [{
        name : 'Sala Alma',
        description: 'Coqueto local con música en directo',
        location: 'Aquí al lao',
        capacity: 10,
        gallery: 'https://www.esloqueveo.com/thumbnail.aspx?p_registro=145227&p=0&t=33',
        location : {
            type : 'Point',
            coordinates : [
                40.438985,
                -3.691381  
            ]}
    },
    {
        name : 'Sala Belén',
        description: 'Coqueto local con música en directo',
        location: 'Aquí al lao',
        capacity: 50,
        gallery: 'https://www.esloqueveo.com/thumbnail.aspx?p_registro=145227&p=0&t=33',
        location : {
            type : 'Point',
            coordinates : [
                40.438985,
                -3.691381
            ]}
    }
]



Bar.create(bars)
    .then((result) => {
        console.log('created')
    })
    .catch((err) => {
        console.log(err);
    })



