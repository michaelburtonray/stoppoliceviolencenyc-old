import React from 'react';
import moment from 'moment';

function Event({event, start_time}) {
  const daysOfTheWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
  var eventDate = new Date(event.start_time);
  const dayOfTheWeek = daysOfTheWeek[eventDate.getDay()];
  const href = `https://www.facebook.com/events/${event.id}/`;

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

  return (
    <a className="events__event" href={href} target="_blank" rel="noopener noreferrer">
      <div className="event__date-column">
        <div className="event__day-of-the-week">{dayOfTheWeek}</div>
        <div className="event__date-column__bottom">
          <span className="event__day-of-the-month">{months[eventDate.getMonth()]}</span>&nbsp;<span className="event__day-of-the-month">{eventDate.getDate()}</span>
        </div>
      </div>
      <div className="event__info">
        {event.name && <div className="event__name">{event.name}</div>}
        {start_time && event.end_time && <div className="event__full-date"><DisplayDate start_time={start_time} end_time={event.end_time} /></div>}
        {event.place && event.place.name && <div className="event__place-name">{event.place.name}</div>}
        {event.place && event.place.location && <div className="event__location-city">{event.place.location.city}</div>}
      </div>
    </a>
  )
}

function DisplayDate(props) {
  let start_time = moment(props.start_time);

  return <div>{start_time.format('LLLL')}</div>
}

export default Event;