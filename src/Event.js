import React from 'react';
import moment from 'moment';

function Event(props) {
  const event = props.event;
  console.log(event);
  console.log(moment().format());
  const daysOfTheWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
  var eventDate = new Date(event.start_time);
  const dayOfTheWeek = daysOfTheWeek[eventDate.getDay()];

  const href = `https://www.facebook.com/events/${event.id}/`;

  return (
    <a href={href} target="_blank" className="events__event">
      <div className="event__date-column">
        <div className="event__day-of-the-week">{dayOfTheWeek}</div>
        <div className="event__day-of-the-month">{eventDate.getDate()}</div>
      </div>
      <div className="event__info">
        <div className="event__name">{event.name}</div>
        <div className="event__full-date"><DisplayDate start_time={event.start_time} end_time={event.end_time} /></div>
        <div className="event__place-name">{event.place.name}</div>
        <div className="event__location-city">{event.place.location.city}</div>
      </div>
    </a>
  )
}

function DisplayDate(props) {  
  let start_time = moment(props.start_time);

  return <div>{start_time.format('LLLL')}</div>
}

export default Event;