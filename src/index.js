import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import "./index.css";
import App from "./App";
import Home from "./Home.js";
import Join from "./Join.js";
import Legislation from "./Legislation";
import Faq from "./Faq";
import Contact from "./Contact";
import PrivacyPolicy from "./PrivacyPolicy";
import Resources from "./Resources";
import Endorsers from "./Endorsers";

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/join" component={Join} />
      <Route path="/legislation" component={Legislation} />
      <Route path="/faq" component={Faq} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/resources" component={Resources} />
      <Route path="/endorse" component={Endorsers} />
    </Route>
  </Router>,
  document.getElementById("root")
);
