import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Review(){
    const reviewFeedback = useSelector(store => store.reviewReducer);
    console.log(reviewFeedback);
    const dispatch = useDispatch();
    const history = useHistory();

    const submitReview = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: reviewFeedback.feeling,
                understanding: reviewFeedback.understanding,
                support: reviewFeedback.support,
                comments: reviewFeedback.comments,
            }
            .then(response => {
                console.log(response);
                history.push('/success');
            })
            .catch(error => {
                console.log('Error with posting to server', error);
                alert('Could not submit feedback, try again later!');
            })
        })
    }
    
    return (
        <>
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

export default Review