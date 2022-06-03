import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/components/Movies" component={Movies} />
      <Route exact path="/components/Directors" component={Directors} />
      <Route exact path="/components/Actors" component={Actors} />
    </div>
    </Router>
  );
};

export default App
