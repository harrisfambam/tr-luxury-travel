import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import SEO from "components/SEO/SEO.js";
import AutoScrollToTop from "components/AutoScrollToTop/AutoScrollToTop.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ContactPage from "views/ContactPage/ContactPage.js";
import PrivacyPolicy from "views/PrivacyPolicy/PrivacyPolicy.js";
import TermsAndConditions from "views/TermsAndConditions/TermsAndConditions.js";

import SiteConfig from "./site-config.js";

if (process.env.REACT_APP_SITE_URL && "localStorage" in window) {
  window.localStorage.setItem("netlifySiteURL", process.env.REACT_APP_SITE_URL);
}

ReactDOM.render(
  <Router>
    <SEO
      url={SiteConfig.url}
      title={SiteConfig.title}
      description={SiteConfig.description}
    />
    <AutoScrollToTop />
    <Switch>
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
