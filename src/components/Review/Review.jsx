import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Review(){
    const reviewFeedback = useSelector(store => store.reviewObject);
    console.log(reviewFeedback);
    const dispatch = useDispatch();
    const history = useHistory();
    
    return (
        <>
            <p>{reviewFeedback.feeling}</p>
            <p>{reviewFeedback.understanding}</p>
            <p>{reviewFeedback.support}</p>
            <p>{reviewFeedback.comments}</p>

        </>
    )

}

export default Review