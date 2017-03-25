/* global FB */

import React, { Component } from 'react';
import './join.css';
import Event from './Event';

class Join extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      events: []
    }

    FB.api(
      '/StopPoliceViolenceNYC/events',
      'GET',
      {
        access_token: '1822632521322919|b17e6b343ca31c330d1912613961f381'
      },
      (response) => {
          // Insert your code here

          console.log(response);
          this.setState({events: response.data})
      }
    );


  }
  render() {
    return (
      <div className="join-page">
        <section className="events">
          <h2>Upcoming Events</h2>
          {this.state.events.slice(0,3).map((event, idx) => <Event event={event} key={idx} />)}
          <a className="events__view-more" href="https://www.facebook.com/pg/StopPoliceViolenceNYC/events/" target="_blank">View more&hellip;</a>
        </section>
      </div>
    )
  }
}

export default Join;