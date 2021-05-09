import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling(){
    const [feeling, setFeeling] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const addFeeling = (event) => {
        event.preventDefault();
        if (feeling <= 0) {
            alert('Please enter a valid rating between 1 and 10.');
            return;
        }
        else {
            dispatch({type: 'ADD_FEELING', payload: feeling})
            history.push('/understanding');
        }
    }

    return (
        <>
            <form onSubmit={addFeeling}>
                <h3>How are you feeling today?</h3>
                <input onChange={(event) => setFeeling(event.target.value)} type="number" placeholder="Rating" max="10" min="0" value={feeling}/>
                <button>Next</button>
            </form>
            
        </>
    )
}

export default Feeling;