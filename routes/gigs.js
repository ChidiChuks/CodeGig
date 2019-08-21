const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

//Get gig list
router.get('/', (req, res) =>
    Gig.findAll()
    .then(gigs => {
        console.log(gigs);
        res.status(200);
    })
    .catch(err => console.log(err)));

//Add a gig
router.get('/add', (req, res) => {
    const data = {
        title: 'Looking for a React developer',
        technologies: 'react,javascript,html,css',
        buget: '$3000',
        description: 'I want this developer to be well-enlightened to create a solid and modern application',
        contact_email: 'user1@gmail.com'
    }

    let { title, technologies, buget, description, contact_email } = data;

    //Insert into table
    Gig.create({
            title,
            technologies,
            buget,
            description,
            contact_email,
        })
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log(err));
});

module.exports = router;