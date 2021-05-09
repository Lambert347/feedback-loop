import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//function to get the review objects from the database to be later distributed to the client
//this honestly may be unnecessary but I don't know yet
const reviewObject = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return {
                ...state,
                feeling: action.payload
            }
        case 'ADD_UNDERSTANDING':
            return {
                ...state,
                understanding: action.payload
            }
        case 'ADD_SUPPORT':
            return {
                ...state,
                support: action.payload
            }
        case 'ADD_COMMENTS':
            return {
                ...state,
                comments: action.payload
            }
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        reviewObject,
    })

)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
