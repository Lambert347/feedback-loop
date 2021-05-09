import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState(0);

    const addUnderstanding = (event) => {
        event.preventDefault();
        if (understanding <= 0) {
            alert('Please enter a valid rating');
            return;
        }
        else {
            dispatch({type: 'ADD_UNDERSTANDING', payload: understanding})
            history.push('/support');
        }
    }
    
    return (
        <>
            <form onSubmit={addUnderstanding}>
                <h3>How well are you understanding the material?</h3>
                <input onChange={(event) => setUnderstanding(event.target.value)} type="number" placeholder="Understanding" maxLength={10} value={understanding}/>
                <button>Next</button>
            </form>
        </>
    )
}

export default Understanding