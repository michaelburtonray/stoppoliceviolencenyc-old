import React, { Component } from 'react';
import ContentfulClient from './ContentfulClient';
import { markdown } from 'markdown';
import './contact.css';

class Contact extends Component {
  constructor() {
    super();

    const contentfulClient = new ContentfulClient();

    this.state = {
      title: '',
      content: ''
    }

    contentfulClient.getContactPage()
      .then(response => {
        const data = response.items[0];

        const title = data.fields.title;

        const content = markdown.toHTML( data.fields.content );

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

export default Contact;