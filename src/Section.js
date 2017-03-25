import React from 'react';
import './section.css';

function Section(props) {
  console.log(props);
  return (
    <section id={ props.section.heading.replace(/\s+/g, '-').toLowerCase() }>
      <h2>{props.section.heading}</h2>
      <div className="section__content" dangerouslySetInnerHTML={{ __html: props.section.content }}></div>
    </section>
  )
}

export default Section;