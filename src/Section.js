import React from 'react';
import './section.css';

function Section(props) {
  return (
    <section id={ props.section.heading.replace(/\s+/g, '-').toLowerCase() }>
      <h2 className="section__heading">{props.section.heading}</h2>
      <div className="section__content" dangerouslySetInnerHTML={{ __html: props.section.content }}></div>
    </section>
  )
}

export default Section;