import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReduxPromise from "redux-promise";


//import App from './components/app';
import reducers from './reducers';
import LearnMore from './components/learnMore'
import Index from './components/index'
import AllAlgo from './components/allAlgo'



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          
          <Route path="/learnMore" component={LearnMore}/> 
          <Route path="/algo" component={AllAlgo}/> 
          <Route path="/" component={Index}/>
          
        </Switch>
      </div>
    
    </BrowserRouter>
  
  </Provider>
  , document.querySelector('.container'));
