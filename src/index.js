import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//function to get the review objects from the database to be later distributed to the client
//this honestly may be unnecessary but I don't know yet
const reviewObject = (state = {}, action) => {
    if (action.type === 'GET_REVIEWS') {
        return action.payload;
    }
    return state;
}


const storeInstance = createStore(

)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
