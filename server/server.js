const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const pool = require('./modules/pool');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback', (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding feedback to database`, newFeedback);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;

    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error with adding new feedback to database`, error);
            res.sendStatus(500);
        });
});


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});