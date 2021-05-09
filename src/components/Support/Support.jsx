import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState(0);

    const addSupport = (event) => {
        event.preventDefault();
        if (support = 0) {
            alert('Please enter a valid rating between 1 and 10.');
            return;
        }
        else {
            dispatch({type: 'ADD_SUPPORT', payload: support})
            history.push('/comments');
        }
    }

    return (
        <>
            <form onSubmit={addSupport}>
                <h3>How well are you being supported?</h3>
                <input onChange={(event) => setSupport(event.target.value)} type="number" placeholder="Support" max="10" min="0" value={support}/>
                <button>Next</button>
            </form>
        </>
    )
}

export default Support;