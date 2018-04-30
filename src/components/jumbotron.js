import React, { Component } from "react";

class Junmbotron extends Component {
 
  render() {
    return (
     <div className="jumbotron" style={{marginTop:50}}>
         
              <h1 className="display-4">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <p className="lead">
                    <a className="btn btn-primary btn-lg" href="/algo" role="button">Go To Algo</a>
                    <a className="btn btn-info btn-lg" href="/learnMore" role="button" style={{position: 'absolute', right: 220}}>Learn more</a>

             </p>

      </div>
    );
  }
}

export default Junmbotron;