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
            <p>{reviewFeedback.feeling.feeling}</p>
            <p>{reviewFeedback.understanding.understanding}</p>
            <p>{reviewFeedback.support.support}</p>
            <p>{reviewFeedback.comments.comments}</p>

        </>
    )

}

export default Review