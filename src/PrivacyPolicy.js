import React, { Component } from 'react';
import ContentfulClient from './ContentfulClient';
import { markdown } from 'markdown';
import './contact.css';

class PrivacyPolicy extends Component {
  constructor() {
    super();


    this.state = {
      title: '',
      content: ''
    }
  }

  componentDidMount() {
    const contentfulClient = new ContentfulClient();

    contentfulClient.getPrivacyPolicyPage()
      .then(response => {
        const data = response.items[0];

        const title = data.fields.title;

        const content = markdown.toHTML(data.fields.content);

        this.setState({ title, content });
      })
  }

  render() {
    return (
      <div className="contact-page">
        <h1>{this.state.title}</h1>
        <div className="contact-page__content" dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </div>
    )
  }
}

export default PrivacyPolicy;