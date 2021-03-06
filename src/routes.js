import React from 'react';
import { IndexRoute, browserHistory } from 'react-router';
import { Route } from 'react-router-dom';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import WorkshopForm from './containers/WorkshopForm';
import WorkshopList from './containers/WorkshopList';
import Dashboard from './containers/DashboardPage';
import RegisterPage from './containers/RegisterPage';
import GenreForm from "./containers/GenreForm";
import GenreList from "./containers/GenreList";
import PublicView from "./containers/PublicView";
import UpdateWorkshop from "./containers/UpdateWorkshop";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contact";

export default (

  <Route>
    <Route exact path="/login" history={browserHistory} component={LoginPage}/>
    <Route exact path="/" history={browserHistory} component={App}>
      <Route exact path="/register" history={browserHistory} component={RegisterPage}/>
      <IndexRoute component={PublicView}/>

      <Route path="dashboard" history={browserHistory} component={Dashboard}/>
      <Route path="about" history={browserHistory} component={AboutUs}/>
      <Route path="contact" history={browserHistory} component={ContactUs}/>
      <Route path="workshop/new"  history={browserHistory} component={WorkshopForm}/>
      <Route path="workshop/:_id"  history={browserHistory} component={UpdateWorkshop}/>
      <Route path="genre/new"  history={browserHistory} component={GenreForm}/>
      <Route path="genres"  history={browserHistory} component={GenreList}/>
      <Route path="workshops"  history={browserHistory} component={WorkshopList}/>
      <Route path="*"  history={browserHistory} component={NotFoundPage}/>
    </Route>
  </Route>
);


