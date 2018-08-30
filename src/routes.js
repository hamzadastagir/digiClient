import React from 'react';
import { IndexRoute, browserHistory } from 'react-router';
import { Route } from 'react-router-dom';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import RegisterPage from './containers/RegisterPage';


export default (
  
  <Route>
      <Route exact path="/login" history={browserHistory} component={LoginPage}/>
      <Route exact path="/" history={browserHistory} component={App}>
      <Route exact path="/register" history={browserHistory} component={RegisterPage}/>
      <IndexRoute component={Dashboard}/>
      
      
      <Route path="dashboard" history={browserHistory} component={Dashboard}/>
      <Route path="form"  history={browserHistory} component={FormPage}/>
      <Route path="table"  history={browserHistory} component={TablePage}/>
      <Route path="*"  history={browserHistory} component={NotFoundPage}/>
    </Route>
    
  </Route>
);


