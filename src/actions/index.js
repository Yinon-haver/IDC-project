import axios from "axios";



export function selectAlgo(algo) {
    // selectAlgo is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
      type: "ALGO_SELECTED",
      payload: algo
    };
  }


// a simple get request example 

  export function fetchData() {
    const request = axios.get('https://vue-http-26677.firebaseio.com/data.json');
      //redux-promise is a middleware so 
    return {
      type: "FETCH_DATA",
      payload: request
    };
  }

  export function createPost(values) {
    const request = axios.post(`https://vue-http-26677.firebaseio.com/data.json`, values);
  
    return {
      type: "CREATE_POST",
      payload: request
    };
  }