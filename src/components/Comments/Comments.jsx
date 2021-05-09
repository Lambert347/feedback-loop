import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments(){
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const addComments = (event) => {
        event.preventDefault();
        console.log(comments);
        dispatch({type: 'ADD_COMMENTS', payload: {comments: comments}})
        history.push('/review');
    }

    return (
        <form onSubmit={addComments}>
            <h3>Any comments that you want to leave?</h3>
            <input onChange={(event) => setComments(event.target.value)} type="text" placeholder="Leave a comment"  value={comments} />
            <button>Next to review</button>
        </form>
    )
}