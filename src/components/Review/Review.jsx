import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

//function handle the final submission of data to the database itself
function Review(){
    //takes in all the data the was moved to the store from the previous steps and then puts it into a reviewFeedback object
    const reviewFeedback = useSelector(store => store.reviewReducer);
    console.log(reviewFeedback);

    //declares history to be used by the function later
    const history = useHistory();

    //function to handle the final submission of data to the database
    const submitReview = (event) => {
        event.preventDefault();
        //axios post request to the server that sends a bundle of information with the feeling, understand, support, and comments keys to the server to then be sent to the database.
        //the data is that information that was taken in from the store
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: reviewFeedback.feeling,
                understanding: reviewFeedback.understanding,
                support: reviewFeedback.support,
                comments: reviewFeedback.comments,
            }
            //if the process was successful, logs the response for the client and only then is the user moved to the next page
        }).then(response => {
                console.log(response);
                history.push('/success');
            })
            //error in the event that there is one with sending the data to the server
            .catch(error => {
                console.log('Error with posting to server', error);
                alert('Could not submit feedback, try again later!');
            });
    }
    //renders this component to the DOM
    return (
        <>
        {/* allows the user to review the information they entered alongside the question that was asked */}
        {/* the user is then asked if they want to submit their feedback and if they click submit, the submitReview function above is run */}
        <form onSubmit={submitReview}>
            <p>How are you feeling today? {reviewFeedback.feeling}</p>
            <p>How well are you understanding the material? {reviewFeedback.understanding}</p>
            <p>How well are you being supported? {reviewFeedback.support}</p>
            <p>Are there any comments that you want to leave with us?</p>
            <p>{reviewFeedback.comments}</p>
            <h3>Do you want to submit your review?</h3>
            <button>Submit</button>
        </form>
        </>
    )

}
//exports this component for use by the app.
export default Review