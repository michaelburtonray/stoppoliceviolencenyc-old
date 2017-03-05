import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import './index.css';

import Home from './Home.js';
import Join from './Join.js';
import Legislation from './Legislation';
import Faq from './Faq';
import Contact from './Contact';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/join" component={Join} />
      <Route path="/legislation" component={Legislation} />
      <Route path="/faq" component={Faq} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('root'))
