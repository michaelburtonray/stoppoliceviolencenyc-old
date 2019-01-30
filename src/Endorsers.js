import React, { Component } from "react";
import ContentfulClient from "./ContentfulClient";
import { markdown } from "markdown";

import "./endorsers.css";

class Resources extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      content: "",
    };
  }

  componentDidMount() {
    const contentfulClient = new ContentfulClient();
    contentfulClient
      .getEndorsersPage()
      .then(response => {
        return response.items[0];
      })
      .then(data => {
        const title = data.fields.title;

        const content = markdown.toHTML(data.fields.content);

        this.setState({ title, content });
      });
  }

  render() {
    return (
      <div className="endorsers">
        <h1>{this.state.title}</h1>
        <div
          className="endorsers-page__content"
          dangerouslySetInnerHTML={{ __html: this.state.content }}
        />
      </div>
    );
  }
}

export default Resources;
