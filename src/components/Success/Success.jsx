import {useHistory} from 'react-router-dom';
import react from 'react';

function Success(){
    const history = useHistory();
    const returnHome = () => {
        history.push('/');
    }

    return (
        <>
            <form onSubmit={returnHome}>
                <h2>Thank you for your feedback!</h2>
                <h3>Press the return button to return to the home screen to start a new submission.</h3>
                <button>Return</button>
            </form>
        </>
    )
}

export default Success;