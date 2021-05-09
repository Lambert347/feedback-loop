import React from 'react';
import {useHistory} from 'react-router-dom';
//basic Home function to handle the rendering of the home component and the functionality of the home component
function Home() {
    //declares the history variable to be used later to move the user to the first real page of the app
    const history = useHistory();
    //basic function to move the user to the feeling page, the first page of the feedback
    const movingOn = () => {
        history.push('/feeling');
    }
    //renders the page to the dom 
    return (
        <>
            {/* Tells the user to click the button and when they do, moves them to the next page */}
            <h2>Hello! Please press start to begin the submission process!</h2>
            <button onClick={movingOn}>Start</button>
        </>
    )
}
//export this component for the App
export default Home;