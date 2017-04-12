import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slick-theme-ecrb.css'

function EcrbSlideshow(props) {

  const slickSettings = {
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

  if(props.sliderSlides && props.sliderSlides.length > 0) {
    return (
      <Slider {...slickSettings}>
        {
          props.sliderSlides.map( (slide, idx) => {
            return (
              <div data-index={idx} key={slide.sys.id}>
                <img src={slide.fields.file.url} alt={slide.fields.title} />
                <div className='slick-slide__caption'>
                  <h2>{slide.fields.title}</h2>
                  <p>{slide.fields.description}</p>
                </div>
              </div>
            )
          })
        }
      </Slider>
    )
  } else {
    return null;
  }
}

export default EcrbSlideshow