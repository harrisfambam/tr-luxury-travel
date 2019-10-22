import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import AutoScrollToTop from "components/AutoScrollToTop/AutoScrollToTop.js";
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ContactPage from "views/ContactPage/ContactPage.js";
import PrivacyPolicy from "views/PrivacyPolicy/PrivacyPolicy.js";
import TermsAndConditions from "views/TermsAndConditions/TermsAndConditions.js";

if (process.env.REACT_APP_SITE_URL && 'localStorage' in window) {
  window.localStorage.setItem('netlifySiteURL', process.env.REACT_APP_SITE_URL)
}

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <AutoScrollToTop />
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/components" component={Components} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
