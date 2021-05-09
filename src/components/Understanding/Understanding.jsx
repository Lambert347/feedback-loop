import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
//function to handle the rendering of and the functionality of the understanding page of the app
function Understanding(){
    //declares both dispatch and history for later use
    const dispatch = useDispatch();
    const history = useHistory();
    //declares constant of understanding and the function of setUnderstanding to update its state. Set to the default state of 0.
    const [understanding, setUnderstanding] = useState(0);

    //function to handle when the form is submitted 
    const addUnderstanding = (event) => {
        event.preventDefault();
        //checks to make sure understanding's value is not the default of 0, meaning that the user did not enter a valid value
        if (understanding <= 0) {
            //alerts the user and breaks the function, preventing the process from continuing until a valid number is entered 
            alert('Please enter a valid rating between 1 and 10.');
            return;
        }
        //if the input is valid, dispatch the data to the server and move the user to the next page with history.push
        else {
            dispatch({type: 'ADD_UNDERSTANDING', payload: understanding})
            history.push('/support');
        }
    }
    
    //handles the rendering of the dom for this page
    return (
        <>
        {/* when the form is submitted by the button click, take the input and run the addUnderstanding function*/}
            <form onSubmit={addUnderstanding}>
                <h3>How well are you understanding the material?</h3>
                <input onChange={(event) => setUnderstanding(event.target.value)} type="number" placeholder="Understanding" max="10" min="0" value={understanding}/>
                <button>Next</button>
            </form>
        </>
    )
}
//export component for the App
export default Understanding