import React, { Component } from 'react';
import ContentfulClient from './ContentfulClient';
import { markdown } from 'markdown';
import './legislation.css';

class Legislation extends Component {
  constructor() {
    super();

    const contentfulClient = new ContentfulClient();
  }

  render() {
    return (
      <div className="legislation-page">

        <iframe src="https://docs.google.com/document/d/1S-UXmIM7OIP7O6fr6MAY-I-bj_RhlhVVVjH-1NkHhuQ/pub?embedded=true"></iframe>

      </div>
    )
  }
}

export default Legislation;