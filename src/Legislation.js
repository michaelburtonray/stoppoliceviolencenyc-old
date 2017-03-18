import React, { Component } from 'react';
import ContentfulClient from './ContentfulClient';
import { markdown } from 'markdown';
import './legislation.css';

class Legislation extends Component {
  constructor() {
    super();

    const contentfulClient = new ContentfulClient();

    this.state = {
      title: '',
      content: '',
      embedCode: ''
    }

    contentfulClient.getLegislationPage()
      .then(response => {
        const data = response.items[0];

        const title = data.fields.title;

        const content = markdown.toHTML( data.fields.content );

        const embedCode = data.fields.embedCode;

        this.setState({ title, content, embedCode });
      })
  }

  render() {
    return (
      <div className="legislation-page">
        <h1>{this.state.title}</h1>
        <div className="legislation-page__content" dangerouslySetInnerHTML={{ __html: this.state.content }} />
        <div className="legislation-page__embed-code" dangerouslySetInnerHTML={{ __html: this.state.embedCode }} />
      </div>
    )
  }
}

export default Legislation;