import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

//function to handle the rendering of and the functionality of the feeling component of the app
function Feeling(){
    //declares dispatch and history to be used later
    const dispatch = useDispatch();
    const history = useHistory();
    //declares the feeling constant and setFeeling variable to modify its state. Default state is 0.
    const [feeling, setFeeling] = useState(0);

    //function to take in the input from the form and then dispatch it to the server
    const addFeeling = (event) => {
        event.preventDefault();
        //checks to make sure the user has entered a valid input between 1 and 10
        if (feeling <= 0) {
            //if not, the user is alerted and return breaks the function, preventing the user from continuing until a valid input is present.
            alert('Please enter a valid rating between 1 and 10.');
            return;
        }
        //if the input is valid, dispatch it to the server and then move the user to the next page with history.push
        else {
            dispatch({type: 'ADD_FEELING', payload: feeling})
            history.push('/understanding');
        }
    }
    //renders the dom for this page of the app
    return (
        <>
            {/* when the form is submitted by clicking the next button, take the input and run the addFeeling function from above */}
            <form onSubmit={addFeeling}>
                <h3>How are you feeling today?</h3>
                <input onChange={(event) => setFeeling(event.target.value)} type="number" placeholder="Rating" max="10" min="0" value={feeling}/>
                <button>Next</button>
            </form>
            
        </>
    )
}
//export the Feeling component to be used by the app.
export default Feeling;