// State argument is not application state, only the state this reducer is responsible for
export default function(state = [], action) {
    switch (action.type) {

      case "ALGO_SELECTED":
        return action.payload;

      //return the data from the promise 
      case "FETCH_DATA":
        //return new array 
        return [action.payload.data, ...state]

      case "CREATE_POST":
        return { ...state };
      
    }
    
    return state;
  }