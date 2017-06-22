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

  mailchimpForm() {
    return (
      <div id="mc_embed_signup">
        <form action="//stoppoliceviolenceNYC.us15.list-manage.com/subscribe/post?u=88d16b0689b23efe0b7c90fe2&amp;id=7ded0f69b4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe to our mailing list</h2>
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
              <label htmlhtmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
              </label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL"/>
            </div>
            <div className="mc-field-group">
              <label htmlhtmlFor="mce-FNAME">First Name </label>
              <input type="text" name="FNAME" className="" id="mce-FNAME"/>
            </div>
            <div className="mc-field-group">
              <label htmlhtmlFor="mce-LNAME">Last Name </label>
              <input type="text" name="LNAME" className="" id="mce-LNAME"/>
            </div>
            <div className="mc-field-group input-group">
              <strong>Do you want to volunteer? </strong>
              <ul>
                <li><input type="checkbox" value="1" name="group[2585][1]" id="mce-group[2585]-2585-0"/><label htmlhtmlFor="mce-group[2585]-2585-0">I want to volunteer!</label></li>
              </ul>
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response"></div>
              <div className="response" id="mce-success-response"></div>
            </div>
            <input type="text" name="b_88d16b0689b23efe0b7c90fe2_7ded0f69b4" tabIndex="-1" />
            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
          </div>
        </form>
      </div>
    )
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

              <form className="subscribe-form" action="https://stoppoliceviolenceNYC.us15.list-manage.com/subscribe/post" method="POST" target="_blank">
                <label htmlhtmlFor="MERGE0" className="subscribe-form__top">Sign up for campaign updates</label>

                <input id="MERGE0" name="MERGE0" placeholder="Email Address" type="email" />

                <div className="subscribe-form__bottom">
                  <input id="want-to-volunteer" name="group[2585][1]" type="checkbox" />
                  <label htmlhtmlFor="want-to-volunteer">
                    I want to
                    <br/>
                    volunteer!
                  </label>
                  <input className="button yellow-on-orange" type="submit" />
                </div>

                <input type="hidden" name="u" value="88d16b0689b23efe0b7c90fe2" />
                <input type="hidden" name="id" value="7ded0f69b4" />
                <input type="hidden" name="ht" value="47fbb6dfebb668448724110b48267b58eaa4f1b8:MTQ5NzQ5MjIyOC40MjI2" />
              </form>

              <form className="subscribe-form" action="//stoppoliceviolenceNYC.us15.list-manage.com/subscribe/post?u=88d16b0689b23efe0b7c90fe2&amp;id=7ded0f69b4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                  <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                  <div class="mc-field-group">
                    <label htmlFor="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
                    <input type="email" name="EMAIL" class="required email" placeholder="Email Address" id="mce-EMAIL" />
                  </div>
                  <div class="mc-field-group input-group">
                    <strong>Do you want to volunteer? </strong>
                    <ul>
                      <li><input type="checkbox" value="1" name="group[2585][1]" id="mce-group[2585]-2585-0" /><label htmlFor="mce-group[2585]-2585-0">I want to volunteer!</label></li>
                    </ul>
                  </div>
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style={{ display: "none" }}></div>
                    <div class="response" id="mce-success-response" style={{ display: "none" }}></div>
                  </div>
                  <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_88d16b0689b23efe0b7c90fe2_7ded0f69b4" tabindex="-1" /></div>
                  <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button yellow-on-orange" /></div>
                </div>
              </form>

              <div className="column">
                <a className="button yellow-on-blue" href="//google.com" target="_blank" rel="noopener noreferrer">Donate Now!</a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    )
  }
}

export default App;