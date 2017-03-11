import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContentfulClient from './ContentfulClient';

class Home extends Component {
  constructor() {
    super();
    this.slickSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }



  }
  render() {

    console.log('CONTENTFUL_SPACE')
    console.log(process.env.CONTENTFUL_SPACE)
    return (
      <div className="hero-slideshow">
        <p>This is the hero slideshow</p>
        <p>{ this.props.route.mike }</p>

        <Slider {...this.slickSettings}>
          <div><img src="http://placehold.it/1200x385?text=slide1" alt="test" /></div>
          <div><img src="http://placehold.it/1200x385?text=slide2" alt="test" /></div>
          <div><img src="http://placehold.it/1200x385?text=slide3" alt="test" /></div>
          <div><img src="http://placehold.it/1200x385?text=slide4" alt="test" /></div>
          <div><img src="http://placehold.it/1200x385?text=slide5" alt="test" /></div>
          <div><img src="http://placehold.it/1200x385?text=slide6" alt="test" /></div>
        </Slider>

      </div>
    )
  }
}

export default Home;