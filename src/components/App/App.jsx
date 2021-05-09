import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
//import all the various components for this project
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Home from '../Home/Home';
import Success from '../Success/Success';
//the actual app function that ties everything together
function App() {
  //renders the basic stuff to the dom for each page of this app
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* These are all the various routers that match the components that were imported */}
      {/* The user starts at the home screen and then is directed to each component before being looped back to the home screen */}
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/feeling" component={Feeling} />
        <Route exact path="/understanding" component={Understanding} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/success" component={Success} />
      </Router>
    </div>
  );
}

export default App;
