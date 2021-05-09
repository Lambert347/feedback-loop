import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Review(){
    const reviewFeedback = useSelector(store => store.reviewReducer);
    console.log(reviewFeedback);
    const dispatch = useDispatch();
    const history = useHistory();
    
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