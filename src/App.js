import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import ContentfulClient from './ContentfulClient';

import logo from './logo.svg';
import logoBlue from './logo-blue.svg';

import './button.css';
import './elements.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.ACTIVE = { color: 'white' }

    this.state = {
      mobileNavIsActive: false,
      joinSections: []
    }

    this.toggleActiveMobileNav = this.toggleActiveMobileNav.bind(this);
    this.toggleCloseMobileNav = this.toggleCloseMobileNav.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', event => {
      this.setState({ mobileNavIsActive: false });
    });

    this.populateJoinSub();
  }

  populateJoinSub() {

    const contentfulClient = new ContentfulClient();

    contentfulClient.getJoin()
    .then(response => {
      return response.items[0]
    }).then(data => {
      const joinSections = data.fields.sections.map(section => {
        const heading = section.fields.heading;
        const href = `/join#${section.fields.heading.replace(/\s+/g, '-').toLowerCase()}`;
        const id = section.sys.id;
        return { heading, href, id }
      });
      this.setState({joinSections})
    });


  }

  toggleActiveMobileNav(event) {
    this.setState({ mobileNavIsActive: !this.state.mobileNavIsActive });
  }

  toggleCloseMobileNav(event) {
    this.setState({ mobileNavIsActive: false });
  }

  getMobileNavClassList() {
    return ['mainnav--mobile', this.state.mobileNavIsActive? 'mainnav--active' : ''].join(' ')
  }

  getAppClassList() {
    return ["App", this.state.mobileNavIsActive? 'mainnav--active' : ''].join(' ')
  }

  render() {
    return (
      <div className={this.getAppClassList()}>

        <header className="header">
          <div className="content header__content">

            <IndexLink className="logo" to="/" onClick={this.toggleCloseMobileNav}>
              <img src={logo} alt="logo" />
            </IndexLink>

            <i className="fa fa-bars header__bars" aria-hidden="true" onClick={this.toggleActiveMobileNav}></i>

            <nav className="mainnav">
              <IndexLink className="mainnav-anchor" activeStyle={this.ACTIVE} to="/">Why An Elected Board?</IndexLink>
              <span>
                <Link className="mainnav-anchor" activeStyle={this.ACTIVE} to="/join">Join the Campaign</Link>
                <div className="mainnav__subnavigation">
                  {this.state.joinSections.map(joinSection => <a href={joinSection.href} key={joinSection.id}>{joinSection.heading}</a>)}
                </div>
              </span>
              <Link className="mainnav-anchor" activeStyle={this.ACTIVE} to="/legislation">The Legislation</Link>
              <Link className="mainnav-anchor" activeStyle={this.ACTIVE} to="/faq">FAQ</Link>
              <Link className="mainnav-anchor" activeStyle={this.ACTIVE} to="/contact">Contact</Link>
              <a className="mainnav-anchor button yellow-on-orange" href="//gofundme.com/ecrbnyc" target="_blank" rel="noopener noreferrer">Donate Now!</a>
            </nav>

          </div>
        </header>

        <nav className={this.getMobileNavClassList()} onClick={this.toggleActiveMobileNav}>
          <IndexLink className="mainnav-anchor" activeStyle={this.ACTIVE} to="/">Why An Elected Board?</IndexLink>
          <Link className="mainnav-anchor" activeStyle={this.ACTIVE} to="/join">Join the Campaign</Link>
          <Link className="mainnav-anchor" activeStyle={this.ACTIVE} to="/legislation">The Legislation</Link>
          <Link className="mainnav-anchor" activeStyle={this.ACTIVE} to="/faq">FAQ</Link>
          <Link className="mainnav-anchor" activeStyle={this.ACTIVE} to="/contact">Contact</Link>
          <a className="mainnav-anchor button yellow-on-orange" href="//gofundme.com/ecrbnyc" target="_blank" rel="noopener noreferrer">Donate Now!</a>
        </nav>

        <div className="wrapper">
          <div className="content">
            {this.props.children}
          </div>
        </div>

        <footer className="footer">
          <div className="footer-social">
            <nav className="content footer-social__content">
              <a className="footer-social-anchor" href="//facebook.com/stoppoliceviolencenyc" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i><span>facebook</span></a>
              <a className="footer-social-anchor" href="//instagram.com/nyc_ecrb" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i><span>instagram</span></a>
            </nav>
          </div>

          <div className="footer-bottom">
            <div className="content footer-bottom__content">
              <a  className="logo" href="/">
                <img src={logoBlue} alt="logo" />
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
                <a className="button yellow-on-blue" href="//google.com" target="_blank" rel="noopener noreferrer">Donate Now!</a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;