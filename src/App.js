import React, { Component } from 'react';
import logo from './logo.svg';
import logoBlue from './logo-blue.svg';
import './App.css';
import { Link, IndexLink } from 'react-router';

class App extends Component {
  constructor() {
    super();

    this.ACTIVE = { color: 'white' }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <IndexLink to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </IndexLink>

          <nav className="App-mainnav">
            <IndexLink className="App-mainnav-anchor" activeStyle={this.ACTIVE} to="/">Why An Elected Board?</IndexLink>
            <Link className="App-mainnav-anchor" activeStyle={this.ACTIVE} to="/join">Join the Campaign</Link>
            <Link className="App-mainnav-anchor" activeStyle={this.ACTIVE} to="/legislation">The Legislation</Link>
            <Link className="App-mainnav-anchor" activeStyle={this.ACTIVE} to="/faq">FAQ</Link>
            <Link className="App-mainnav-anchor" activeStyle={this.ACTIVE} to="/contact">Contact</Link>
            <a className="App-mainnav-anchor button green-on-orange" href="//gofundme.com/ecrbnyc" target="_blank">Donate Now!</a>
          </nav>

        </header>

        <div className="App-wrapper">
          <div className="App-content">
            {this.props.children}
          </div>
        </div>

        <footer className="App-footer">
          <nav className="App-footer-social">
            <a className="App-footer-social-anchor" href="//facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a className="App-footer-social-anchor" href="//twitter.com/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a className="App-footer-social-anchor" href="//twitter.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
          </nav>

          <div className="App-footer-bottom">
            <a  href="/">
              <img src={logoBlue} className="App-logo" alt="logo" />            
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
        </footer>
      </div>
    );
  }
}

export default App;
