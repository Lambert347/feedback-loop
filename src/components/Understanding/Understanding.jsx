import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState(0);

    const addUnderstanding = (event) => {
        event.preventDefault();
        console.log(understanding);
        dispatch({type: 'ADD_UNDERSTANDING', payload: {understanding: understanding}})
        history.push('/support');
    }
    
    return (
        <>
            <form onSubmit={addUnderstanding}>
                <h3>How are you understanding the material?</h3>
                <input onChange={(event) => setUnderstanding(event.target.value)} type="number" placeholder="Understanding" maxLength={10} value={understanding}/>
                <button>Next</button>
            </form>
        </>
    )
}

export default Understanding