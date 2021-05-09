import React from 'react';
import {useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory();
    const movingOn = () => {
        history.push('/feeling');
    }

    return (
        <>
            <h2>Hello! Please press start to begin the submission process!</h2>
            <button onClick={movingOn}>Start</button>
        </>
    )
}
export default Home;