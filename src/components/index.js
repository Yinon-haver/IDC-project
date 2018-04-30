import React, { Component } from 'react';
import AlgoList from '../containers/algo-list';
import AlgoDetail from '../containers/algo-details';
import NavBar from './navBar'
import Junbotron from './jumbotron'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar/>
        <Junbotron/>
      </div>
    );
  }
}
