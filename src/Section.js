import React from 'react';
import './section.css';

function Section(props) {
  if(!props.heading) {
    return null;
  }
  return (
    <section id={ props.heading.replace(/\s+/g, '-').toLowerCase() }>
      <h2 className="section__heading">{props.heading}</h2>
      <div className="section__content" dangerouslySetInnerHTML={{ __html: props.content }}></div>

      {props.children}

    </section>
  )
}

export default Section;