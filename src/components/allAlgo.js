import React, { Component } from 'react';
import AlgoList from '../containers/algo-list';
import AlgoDetail from '../containers/algo-details';
import { Link } from "react-router-dom";

import NavBar from './navBar'
import Junbotron from './jumbotron'

export default class AllAlgo extends Component {
  
  render() {
    return (
      <div>
        <NavBar/>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Go back
          </Link>
        </div>
        <AlgoList/>
        <AlgoDetail/>
      </div>
    );
  }
}
