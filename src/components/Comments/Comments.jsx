import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

//function to handle the rendering of and the functionality of the comments component of the app
function Comments(){

    //declares dispatch and history to be used later
    const dispatch = useDispatch();
    const history = useHistory();

    //declares comments constant and setComments function to modify its state. Default state is an empty string ''.
    const [comments, setComments] = useState('');

    //function to dispatch the data from the input to the server and move the user to the review page using history.push
    const addComments = (event) => {
        event.preventDefault();
        //unlike the other components, this component does not have any input validation. This allows the user to not have to enter any comment if they don't want to
        //or enter in whatever they want and have it seen as valid.
        //dispatches the data to the server
        dispatch({type: 'ADD_COMMENTS', payload: comments})
        //moves the user to the review page to review their submission before submitting it.
        history.push('/review');
    }

    //handles rendering the comments component to the dom
    return (
        // when the form is submitting by clicking the button, takes the information from the input and then runs the addComments function.
        <form onSubmit={addComments}>
            <h3>Are there any comments that you want to leave with us?</h3>
            <input onChange={(event) => setComments(event.target.value)} type="text" placeholder="Leave a comment"  value={comments} />
            <button>Next to review</button>
        </form>
    )
}
//exports the comments component for use by the App
export default Comments;