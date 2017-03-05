import React, { Component } from 'react';
import logo from './logo.svg';
import logoBlue from './logo-blue.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>

          <nav className="App-mainnav">
            <a className="App-mainnav-anchor" href="/">Why An Elected Board?</a>
            <a className="App-mainnav-anchor" href="/">Join the Campaign</a>
            <a className="App-mainnav-anchor" href="/">The Legislation</a>
            <a className="App-mainnav-anchor" href="/">FAQ</a>
            <a className="App-mainnav-anchor" href="/">Contact</a>
            <a className="App-mainnav-anchor button green-on-orange" href="/">Donate Now!</a>
          </nav>
        </header>

        <div className="App-content">
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
              Sign up for campaign updates.
              <br/>
              <input name="email" placeholder="Email Address" type="email" />
              <br/>
              <input className="button yellow-on-orange" type="submit" />
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
