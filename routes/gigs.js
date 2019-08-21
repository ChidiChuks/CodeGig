const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

//Get gig list
router.get('/', (req, res) =>
    Gig.findAll()
    .then(gigs => {
        res.render('gigs', {
            gigs
        });
    })
    .catch(err => console.log(err)));

//Add a gig
router.get('/add', (req, res) => {
    const data = {
        title: 'Simple Wordpress sites',
        technologies: 'wordpress,php,html,css',
        budget: '$1000',
        description: 'I want this developer to be well-enlightened to create a solid and modern application',
        contact_email: 'user2@gmail.com'
    }

    let { title, technologies, budget, description, contact_email } = data;

    //Insert into table
    Gig.create({
            title,
            technologies,
            budget,
            description,
            contact_email,
        })
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log(err));
});

module.exports = router;