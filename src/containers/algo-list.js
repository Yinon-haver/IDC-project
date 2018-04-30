import React, { Component } from "react";
import { connect } from "react-redux";
import { selectAlgo } from '../actions/index';
import { bindActionCreators } from "redux";




class AlgoList extends Component {
    

    renderList(){
        return this.props.algo.map(algo => {
            return (
              <li className="list-group-item list-group-item-info"
                key={algo.title}  
                onClick={() => this.props.selectAlgo(algo)}   
                style={{marginLeft:8,marginTop:20 , marginRight:5,fontSize:40}}
                >{algo.title}  </li>
            );
          });
    }


    render(){
        return(
            <ul className="list-group col-sm-4" style={{marginTop:50 }}>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props in the container 
    return {
        algo: state.algo
    };
  }

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectAlgo is called, the result shoudl be passed
    // to all of our reducers
    return bindActionCreators({ selectAlgo: selectAlgo }, dispatch);
  }
  
// Promote AlgoList from a component to a container - it needs to know
// about this new dispatch method, selectAlgo. Make it available as a prop.
//connect to redux  and asked for data 
export default connect(mapStateToProps , mapDispatchToProps)(AlgoList);


//another option:
//export default connect(mapStateToProps , {selectAlgo})(AlgoList);
