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

//handles the post request from the client
app.post('/feedback', (req, res) => {
    //sets the newFeedback variable to the data received in the request body 
    let newFeedback = req.body;
    console.log(`Adding feedback to database`, newFeedback);
    //queryText to direct the new database entry
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    //using the queryText from above, goes into the database and adds in the data from the newFeedback object into their respective columns. 
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        //if that was done properly, send back the created status to the client
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            //if not, send an error message with the 500 error status
            console.log(`Error with adding new feedback to database`, error);
            res.sendStatus(500);
        });
});


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});