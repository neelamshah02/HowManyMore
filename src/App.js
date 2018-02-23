import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Piechart from './piechart';
import DotMap from './dotmap';

class App extends Component {
  render() {
    return (
      <Router>
            <div className="App">
            <div className = "App-header">How Many More? </div>
            <div className="topnav">
               <a><Link to={'/'}>Home</Link></a>
               <a><Link to={'/pieChart'}>PieChart</Link></a>
               <a><Link to={'/dotMap'}>DotMap</Link></a>
              </div>
               <hr />
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/pieChart' component={Piechart} />
                  <Route exact path='/dotMap' component={DotMap} />
               </Switch>
            </div>
         </Router>
    );
  }
}

export default App;
