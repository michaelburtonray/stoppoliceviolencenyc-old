/* global FB */
import React, { Component } from 'react';
import ContentfulClient from './ContentfulClient';
import EcrbSlideshow from './EcrbSlideshow'
import './join.css';
import Event from './Event';
import Section from './Section';
import { markdown } from 'markdown';

class Join extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      sliderSlides: [],
      subtitle: '',
      intro: '',
      sections: [],
      events: []
    }
  }

  componentDidMount() {
    const contentfulClient = new ContentfulClient();

    contentfulClient.getJoin()
    .then(response => {
      return response.items[0]
    }).then(data => {
      const { title, subtitle } = data.fields;
      const intro = markdown.toHTML( data.fields.intro );

      const sections = data.fields.sections.map(section => {
        const heading = section.fields.heading;
        const content = markdown.toHTML( section.fields.content );
        return { heading, content }
      });

      const sliderSlides = data.fields.sliderSlides;

      this.setState({title,subtitle,intro,sections,sliderSlides})
    });

    contentfulClient.getJoinPageSlides()
    .then(response => {
      const data = response.items[0];
      const sliderSlides = data.fields.slides;
      this.setState({ sliderSlides })
    });



    FB.api(
      '/StopPoliceViolenceNYC/events',
      'GET',
      {
        access_token: '1822632521322919|b17e6b343ca31c330d1912613961f381'
      },
      (response) => {
        this.setState({events: response.data})
      }
    );
  }

  render() {
    const firstSection = this.state.sections[0];
    return (
      <div className="join-page">
        <EcrbSlideshow slicksettings={this.slicksettings} sliderSlides={this.state.sliderSlides}  />


        <h1>{this.state.title}</h1>
        <h3>{this.state.subtitle}</h3>
        <div className="join-page__intro" dangerouslySetInnerHTML={{ __html: this.state.intro }}></div>

        <Section {...firstSection}>
          <section className="events">
            <h2>Upcoming Events</h2>
            {this.state.events.slice(0,3).map((event, idx) => <Event event={event} key={idx} />)}
            <a className="events__view-more" href="https://www.facebook.com/pg/StopPoliceViolenceNYC/events/" target="_blank">View more&hellip;</a>
          </section>
        </Section>

        {this.state.sections.slice(1).map((section, idx) => <Section {...section} key={idx} />)}
      </div>
    )
  }
}

export default Join;