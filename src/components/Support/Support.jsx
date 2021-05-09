import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState(0);

    const addSupport = (event) => {
        event.preventDefault();
        console.log(support);
        dispatch({type: 'ADD_SUPPORT', payload: {support: support}})
        history.push('/comments');
    }

    return (
        <>
            <form onSubmit={addSupport}>
                <h3>How well are you being support?</h3>
                <input onChange={(event) => setSupport(event.target.value)} />
                <button>Next</button>
            </form>
        </>
    )
}

export default Support;