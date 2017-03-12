import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import logo from './logo.svg';
import logoBlue from './logo-blue.svg';

import './button.css';
import './elements.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.ACTIVE = { color: 'white' }
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="content header__content">
            <IndexLink to="/">
              <img src={logo} className="logo" alt="logo" />
            </IndexLink>

            <nav className="mainnav">
              <IndexLink className="mainnav-anchor" activeStyle={this.ACTIVE} to="/">Why An Elected Board?</IndexLink>
              <Link className="mainnav-anchor" activeStyle={this.ACTIVE} to="/join">Join the Campaign</Link>
              <Link className="mainnav-anchor" activeStyle={this.ACTIVE} to="/legislation">The Legislation</Link>
              <Link className="mainnav-anchor" activeStyle={this.ACTIVE} to="/faq">FAQ</Link>
              <Link className="mainnav-anchor" activeStyle={this.ACTIVE} to="/contact">Contact</Link>
              <a className="mainnav-anchor button green-on-orange" href="//gofundme.com/ecrbnyc" target="_blank">Donate Now!</a>
            </nav>
          </div>
        </header>

        <div className="wrapper">
          <div className="content">
            {this.props.children}
          </div>
        </div>

        <footer className="footer">
          <div className="footer-social">
            <nav className="content footer-social__content">
              <a className="footer-social-anchor" href="//facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              <a className="footer-social-anchor" href="//twitter.com/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              <a className="footer-social-anchor" href="//twitter.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </nav>
          </div>

          <div className="footer-bottom">
            <div className="content footer-bottom__content">
              <a  href="/">
                <img src={logoBlue} className="logo" alt="logo" />            
              </a>

              <form className="subscribe-form">
                <div className="subscribe-form__top">Sign up for campaign updates.</div>

                <input name="email" placeholder="Email Address" type="email" />

                <div className="subscribe-form__bottom">
                  <input id="want-to-volunteer" name="want-to-volunteer" type="checkbox" />
                  <label htmlFor="want-to-volunteer">
                    I want to
                    <br/>
                    volunteer!
                  </label>
                  <input className="button yellow-on-orange" type="submit" />              
                </div>

              </form>

              <div className="column">
                <a className="button yellow-on-blue" href="//google.com" target="_blank">Donate Now!</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
