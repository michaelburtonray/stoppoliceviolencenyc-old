import React, { Component } from "react";
import { Link, IndexLink } from "react-router";
import ContentfulClient from "./ContentfulClient";

import logo from "./logo.svg";
import logoBlue from "./logo-blue.svg";

import "./button.css";
import "./elements.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.ACTIVE = { color: "white" };

    this.state = {
      mobileNavIsActive: false,
      joinSections: [],
    };

    this.toggleActiveMobileNav = this.toggleActiveMobileNav.bind(this);
    this.toggleCloseMobileNav = this.toggleCloseMobileNav.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", event => {
      this.setState({ mobileNavIsActive: false });
    });

    this.populateJoinSub();
  }

  populateJoinSub() {
    const contentfulClient = new ContentfulClient();

    contentfulClient
      .getJoin()
      .then(response => {
        return response.items[0];
      })
      .then(data => {
        const joinSections = data.fields.sections.map(section => {
          const heading = section.fields.heading;
          const href = `/join#${section.fields.heading
            .replace(/\s+/g, "-")
            .toLowerCase()}`;
          const id = section.sys.id;
          return { heading, href, id };
        });
        this.setState({ joinSections });
      });
  }

  toggleActiveMobileNav(event) {
    this.setState({ mobileNavIsActive: !this.state.mobileNavIsActive });
  }

  toggleCloseMobileNav(event) {
    this.setState({ mobileNavIsActive: false });
  }

  getMobileNavClassList() {
    return [
      "mainnav--mobile",
      this.state.mobileNavIsActive ? "mainnav--active" : "",
    ].join(" ");
  }

  getAppClassList() {
    return ["App", this.state.mobileNavIsActive ? "mainnav--active" : ""].join(
      " "
    );
  }

  mailchimpForm() {
    return (
      <div id="mc_embed_signup">
        <form
          action="//stoppoliceviolenceNYC.us15.list-manage.com/subscribe/post?u=88d16b0689b23efe0b7c90fe2&amp;id=7ded0f69b4"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe to our mailing list</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name </label>
              <input type="text" name="FNAME" className="" id="mce-FNAME" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name </label>
              <input type="text" name="LNAME" className="" id="mce-LNAME" />
            </div>
            <div className="mc-field-group input-group">
              <strong>Do you want to volunteer? </strong>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    value="1"
                    name="group[2585][1]"
                    id="mce-group[2585]-2585-0"
                  />
                  <label htmlFor="mce-group[2585]-2585-0">
                    I want to volunteer!
                  </label>
                </li>
              </ul>
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" />
              <div className="response" id="mce-success-response" />
            </div>
            <input
              type="text"
              name="b_88d16b0689b23efe0b7c90fe2_7ded0f69b4"
              tabIndex="-1"
            />
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }

  formDefault() {
    return (
      <form
        className="subscribe-form"
        action="//stoppoliceviolenceNYC.us15.list-manage.com/subscribe/post?u=88d16b0689b23efe0b7c90fe2&amp;id=7ded0f69b4"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <div class="indicates-required">
            <span class="asterisk">*</span> indicates required
          </div>
          <div class="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address <span class="asterisk">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              class="required email"
              placeholder="Email Address"
              id="mce-EMAIL"
            />
          </div>
          <div class="mc-field-group input-group">
            <strong>Do you want to volunteer? </strong>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="1"
                  name="group[2585][1]"
                  id="mce-group[2585]-2585-0"
                />
                <label htmlFor="mce-group[2585]-2585-0">
                  I want to volunteer!
                </label>
              </li>
            </ul>
          </div>
          <div id="mce-responses" class="clear">
            <div
              class="response"
              id="mce-error-response"
              style={{ display: "none" }}
            />
            <div
              class="response"
              id="mce-success-response"
              style={{ display: "none" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_88d16b0689b23efe0b7c90fe2_7ded0f69b4"
              tabindex="-1"
            />
          </div>
          <div class="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button yellow-on-orange"
            />
          </div>
        </div>
      </form>
    );
  }

  formSubscribe() {
    return (
      <form
        className="subscribe-form"
        action="//stoppoliceviolenceNYC.us15.list-manage.com/subscribe/post"
        method="post"
      >
        <input type="hidden" name="u" value="88d16b0689b23efe0b7c90fe2" />
        <input type="hidden" name="id" value="7ded0f69b4" />

        <input type="hidden" name="b_88d16b0689b23efe0b7c90fe2_7ded0f69b4" />

        <div className="subscribe-form__top">
          <label htmlFor="mce-EMAIL">Sign up for campaign updates</label>
          <input
            type="email"
            name="EMAIL"
            className="required email"
            placeholder="Email Address"
            id="mce-EMAIL"
          />
        </div>

        <div className="subscribe-form__bottom">
          <input
            type="checkbox"
            value="1"
            name="group[2585][1]"
            id="mce-group[2585]-2585-0"
          />
          <label htmlFor="mce-group[2585]-2585-0">I want to volunteer!</label>

          <button
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button yellow-on-orange"
          >
            Subscribe
          </button>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className={this.getAppClassList()}>
        <header className="header">
          <div className="content header__content">
            <IndexLink
              className="logo"
              to="/"
              onClick={this.toggleCloseMobileNav}
            >
              <img src={logo} alt="logo" />
            </IndexLink>

            <i
              className="fa fa-bars header__bars"
              aria-hidden="true"
              onClick={this.toggleActiveMobileNav}
            />

            <nav className="mainnav">
              <span>
                <Link
                  className="mainnav-anchor"
                  activeStyle={this.ACTIVE}
                  to="/join"
                >
                  Join the Campaign
                </Link>
                <div className="mainnav__subnavigation">
                  {this.state.joinSections.map(joinSection => (
                    <a href={joinSection.href} key={joinSection.id}>
                      {joinSection.heading}
                    </a>
                  ))}
                </div>
              </span>
              <Link
                className="mainnav-anchor"
                activeStyle={this.ACTIVE}
                to="/petition"
              >
                Sign the Petition
              </Link>
              <Link
                className="mainnav-anchor"
                activeStyle={this.ACTIVE}
                to="/legislation"
              >
                The Legislation
              </Link>
              <Link
                className="mainnav-anchor"
                activeStyle={this.ACTIVE}
                to="/endorse"
              >
                Endorsers
              </Link>

              <Link
                className="mainnav-anchor"
                activeStyle={this.ACTIVE}
                to="/faq"
              >
                FAQ
              </Link>
              <Link
                className="mainnav-anchor"
                activeStyle={this.ACTIVE}
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="mainnav-anchor"
                activeStyle={this.ACTIVE}
                to="/resources"
              >
                Resources
              </Link>
              <a
                className="mainnav-anchor button yellow-on-orange"
                href="//gofundme.com/ecrbnyc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Now!
              </a>
            </nav>
          </div>
        </header>

        <nav
          className={this.getMobileNavClassList()}
          onClick={this.toggleActiveMobileNav}
        >
          <span>
            <Link
              className="mainnav-anchor"
              activeStyle={this.ACTIVE}
              to="/join"
            >
              Join the Campaign
            </Link>
            <div className="mainnav__subnavigation">
              {this.state.joinSections.map(joinSection => (
                <a href={joinSection.href} key={joinSection.id}>
                  {joinSection.heading}
                </a>
              ))}
            </div>
          </span>
          <Link
            className="mainnav-anchor"
            activeStyle={this.ACTIVE}
            to="/petition"
          >
            Sign the Petition
          </Link>
          <Link
            className="mainnav-anchor"
            activeStyle={this.ACTIVE}
            to="/legislation"
          >
            The Legislation
          </Link>
          <Link
            className="mainnav-anchor"
            activeStyle={this.ACTIVE}
            to="/endorse"
          >
            Endorsers
          </Link>

          <Link className="mainnav-anchor" activeStyle={this.ACTIVE} to="/faq">
            FAQ
          </Link>
          <Link
            className="mainnav-anchor"
            activeStyle={this.ACTIVE}
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="mainnav-anchor"
            activeStyle={this.ACTIVE}
            to="/resources"
          >
            Resources
          </Link>
          <a
            className="mainnav-anchor button yellow-on-orange"
            href="//gofundme.com/ecrbnyc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate Now!
          </a>
        </nav>

        <div className="wrapper">
          <div className="content">{this.props.children}</div>
        </div>

        <footer className="footer">
          <div className="footer-social">
            <nav className="content footer-social__content">
              <a
                className="footer-social-anchor"
                href="//www.facebook.com/HoldPoliceAccountableNYC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook" aria-hidden="true" />
                <span>facebook</span>
              </a>
              <a
                className="footer-social-anchor"
                href="//instagram.com/holdpoliceaccountable"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" aria-hidden="true" />
                <span>instagram</span>
              </a>
			           <a
                className="footer-social-anchor"
                href="//twitter.com/ecrbfornyc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter" aria-hidden="true" />
                <span>instagram</span>
              </a>
            </nav>
          </div>

          <div className="footer-bottom">
            <div className="content footer-bottom__content">
              <a className="logo" href="/">
                <img src={logoBlue} alt="logo" />
              </a>

              {this.formSubscribe()}

              <div className="column">
                <a
                  className="button yellow-on-blue"
                  href="//google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Now!
                </a>
                <br />
                <Link className="privacy-policy-link" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
