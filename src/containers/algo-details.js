import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from '../actions/index';

class AlgoDetail extends Component{
    // onCLick(){
    //    console.log(this.props.fetchPost()); 

    // }

    

    render(){
        //API exemple
       // console.log(this.props.fetchData())
        if (!this.props.algo) {
            return <div>Select a algo to get started.</div>;
          }

        return(
            <div style={{marginTop:50 , marginLeft:500}}>
                <h3>Details for  {this.props.algo.title} : </h3>
                <div>Title: {this.props.algo.title}</div>
                <div>Pages: {this.props.algo.pages}</div>
               
               
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      algo: state.activeAlgo
    };
  }

//   function mapDispatchToProps(dispatch) {
//     // Whenever selectAlgo is called, the result shoudl be passed
//     // to all of our reducers
//    return bindActionCreators({fetchData:fetchData}, dispatch);
//   }

  export default connect(mapStateToProps,{fetchData})(AlgoDetail);
  