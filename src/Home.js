import React, { Component } from 'react';
import ContentfulClient from './ContentfulClient';
import { markdown } from 'markdown';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      sliderSlides: [],
      homePageDiagramIntro: '',
      homePageDiagramSrc: ''
    }

    this.slickSettings = {
      arrows: false,
      dots: false,
      fade: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
    }

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

  getSlide(slide) {
    return (
      <div key={slide.sys.id}><img src={slide.fields.file.url} alt={slide.fields.title} /></div>
    )
  }

  render() {
    return (
      <div className="home-page">

        <Slider {...this.slickSettings}>
          { this.state.sliderSlides.map(this.getSlide)}
          <div><img src="http://placehold.it/1200x385?text=slide1" alt="test" /></div>
        </Slider>

        <div className="home-page__intro">
          <span>let’s start with an</span>
          <h1>Elected Civilian Review Board.</h1>
          <p>Representing the people and holding police accountable, ECRB members are elected at the community level, offering genuine oversight and recourse to victims of police abuse.</p>
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