import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling(){
    const [feeling, setFeeling] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const addFeeling = (event) => {
        event.preventDefault();
        console.log(feeling);
        dispatch({type: 'ADD_FEELING', payload: feeling})
        history.push('/understanding');
    }

    return (
        <>
            <form onSubmit={addFeeling}>
                <h3>How are you feeling today?</h3>
                <input onChange={(event) => setFeeling(event.target.value)} type="number" placeholder="Rating" maxLength={10} value={feeling}/>
                <button>Next</button>
            </form>
            
        </>
    )
}

export default Feeling;