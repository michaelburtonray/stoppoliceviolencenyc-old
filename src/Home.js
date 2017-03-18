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
      homePageDiagramIntro: '',
      homePageDiagramSrc: ''
    }

    this.slickSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    const contentfulClient = new ContentfulClient();

    contentfulClient.getHomePageDiagram()
    .then(response => {
      const data = response.items[0];


      const homePageDiagramIntro = markdown.toHTML( data.fields.intro );

      const homePageDiagramSrc = !!data.fields.diagram ? data.fields.diagram.fields.file.url : 'http://placehold.it/1100x850';

      console.log(homePageDiagramSrc);

      this.setState({ homePageDiagramIntro, homePageDiagramSrc });
    });    
  }

  render() {
    return (
      <div className="home-page">
        <p>{ this.props.route.mike }</p>

        <Slider {...this.slickSettings}>
          <div><img src="http://placehold.it/1200x385?text=slide1" alt="test" /></div>
          <div><img src="http://placehold.it/1200x385?text=slide2" alt="test" /></div>
          <div><img src="http://placehold.it/1200x385?text=slide3" alt="test" /></div>
          <div><img src="http://placehold.it/1200x385?text=slide4" alt="test" /></div>
          <div><img src="http://placehold.it/1200x385?text=slide5" alt="test" /></div>
          <div><img src="http://placehold.it/1200x385?text=slide6" alt="test" /></div>
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