import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

//function to handle rendering and the function of the support component
function Support(){
    //declares both dispatch to send the data to the server and also history for moving the user to the next page
    const dispatch = useDispatch();
    const history = useHistory();
    //declares a support constant and establishes the setSupport function to modify its state. Also sets the default state to 0.
    const [support, setSupport] = useState(0);
    
    //function that sends the data to server when a user inputs a value and clicks the next button
    const addSupport = (event) => {
        event.preventDefault();
        //if the support value remains 0, meaning that the user did not enter a value, they are notified and the function breaks with return
        if (support = 0) {
            alert('Please enter a valid rating between 1 and 10.');
            return;
        //once the user enters a value between 1 and 10, the data is sent to the server with dispatch
        //and the user is moved to the next page (in this case comments) by using history.push
        }
        else {
            dispatch({type: 'ADD_SUPPORT', payload: support})
            history.push('/comments');
        }
    }
    //renders the page to the dom
    return (
        <>
        {/* form that when a value is entered and the button is clicked, runs the addSupport function from above */}
            <form onSubmit={addSupport}>
                <h3>How well are you being supported?</h3>
                {/* input field for the user to enter their rating */}
                <input onChange={(event) => setSupport(event.target.value)} type="number" placeholder="Support" max="10" min="0" value={support}/>
                <button>Next</button>
            </form>
        </>
    )
}
//exports this component to be used by the App
export default Support;