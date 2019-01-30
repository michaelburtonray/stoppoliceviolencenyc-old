import React, { Component } from "react";
import ContentfulClient from "./ContentfulClient";
import { markdown } from "markdown";

import "./resources.css";

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
      .getResourcesPage()
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
      <div className="resources">
        <h1>{this.state.title}</h1>
        <div
          className="resources-page__content"
          dangerouslySetInnerHTML={{ __html: this.state.content }}
        />
      </div>
    );
  }
}

export default Resources;
