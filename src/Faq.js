import React, { Component } from 'react';
import ContentfulClient from './ContentfulClient';
import { markdown } from 'markdown';
import './faq.css';

class Faq extends Component {
  constructor() {
    super();

    const contentfulClient = new ContentfulClient();

    this.state = {
      title: '',
      questions: []
    }

    contentfulClient.getFaq()
    .then(response => {

      const title = response.items[0].fields.title;

      const questions = response.items[0].fields.questions.map(qa => {
        const question = qa.fields.question;
        const answer = markdown.toHTML( qa.fields.answer );
        return { question, answer }
      })

      this.setState({ title, questions })
    })
  }

  render() {
    return (
      <div className="faq-page">
        <h1>{this.state.title}</h1>
        <ul className="faq-page__contents">{this.state.questions.map(this.questionLinks)}</ul>
        <dl className="faq-page__question-answers">{this.state.questions.map(this.questionAnswers)}</dl>
      </div>
    )
  }

  questionLinks(questionAnswer, idx) {
    return(
      <li key={idx}>
        <a href={ '#' + questionAnswer.question.replace(/\s+/g, '-').toLowerCase() }>{ questionAnswer.question }</a>
      </li>
    )
  }

  questionAnswers(questionAnswer, idx) {
    return (
      <div key={idx}>
        <dt id={ questionAnswer.question.replace(/\s+/g, '-').toLowerCase() }>{ questionAnswer.question }</dt>
        <dd dangerouslySetInnerHTML={{ __html: questionAnswer.answer }} />
        <a className="icon-leftwards-arrow-with-loop" href="#"></a>
      </div>
    )
  }

  anchorfy(question) {
    return question.replace(/\s+/g, '-').toLowerCase()
  }
}

export default Faq;