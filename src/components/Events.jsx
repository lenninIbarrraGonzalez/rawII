import React from 'react';
import Event from './Event';

const Events = ({ events }) => (
  <div>
    <div>
      {events.map(event => (
        <Event key={event.id} event={event} />
      )
      )}
    </div>
  </div>
)

export default Events;