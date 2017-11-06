import React, { Component } from 'react'
import ContentfulClient from './ContentfulClient'
import EcrbSlideshow from './EcrbSlideshow'
import { markdown } from 'markdown'
import './home.css'

class Home extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      sliderSlides: [],
      homePageDiagramIntro: '',
      homePageDiagramSrc: ''
    }
  }

  componentDidMount() {
    const contentfulClient = new ContentfulClient();

    contentfulClient.getHomepageSlides()
    .then(response => {
      const data = response.items[0];
      const title = data.fields.title;
      const sliderSlides = data.fields.slides;
      this.setState({ title, sliderSlides })
    });

    contentfulClient.getHomePageDiagram()
    .then(response => {
      const data = response.items[0];
      const homePageDiagramIntro = markdown.toHTML( data.fields.intro );
      const homePageDiagramSrc = !!data.fields.diagram ? data.fields.diagram.fields.file.url : 'http://placehold.it/1100x850';

      this.setState({ homePageDiagramIntro, homePageDiagramSrc });
    });
  }

  render() {
    return (
      <div className="home-page">

        <EcrbSlideshow slicksettings={this.slicksettings} sliderSlides={this.state.sliderSlides}  />

        <div className="home-page__intro">
          <span>with an</span>
          <h1>Elected Civilian Review Board.</h1>
          <blockquote>Representing the people and holding police accountable, ECRB members are elected at the community level, offering genuine oversight and recourse to victims of police abuse.</blockquote>
        </div>

        <div className="home-page__content">
          <div className="home-page__diagram-intro" dangerouslySetInnerHTML={{ __html: this.state.homePageDiagramIntro }} />
          <img className="home-page__diagram-image" src={this.state.homePageDiagramSrc} alt="diagram for why we need an Review Board" />
        </div>
      </div>
    )
  }
}

export default Home;