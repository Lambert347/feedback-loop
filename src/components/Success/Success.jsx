import {useHistory} from 'react-router-dom';
import react from 'react';
//function to handle the rendering and functionality of the success component of the app
function Success(){
    const history = useHistory();
    //when this returnHome function is called, returns the user to the homepage by using history.push
    const returnHome = () => {
        history.push('/');
    }
    //renders this component to the dom
    return (
        <>
            {/* prompts the user to click the return button if they want to return and make a new submission */}
            {/* effectively allows the user to make as many submissions as they want  */}
            <h2>Thank you for your feedback!</h2>
            <h3>Press the return button to return to the home screen to start a new submission.</h3>
            <button onClick={returnHome}>Return</button>
        </>
    )
}

//exports this component for the App
export default Success;