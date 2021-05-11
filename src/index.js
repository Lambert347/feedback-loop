import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//reducer to handle the storage of information from the client depending on what step they are at in the process
const reviewReducer = (state = {}, action) => {
    //switch case to handle the storage of data depending on what action.type from the client. Matches the value brought in with the desired variable based on that action.type.
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
        case 'CLEAR':
            return state = {}
    }
    //if the action.type does not match any of the indicated ones, don't make any changes and just return the state of the reducer.
    return state;
}

//store to handle storing and distributing the information from the above process back to the client when requested by the review page
const storeInstance = createStore(
    combineReducers({
        reviewReducer,
    }),
    applyMiddleware(logger)

)
//insures that the store is properly used by the App.
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
