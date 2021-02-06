import React from 'react'


const Event = ({ event }) => (
  <div>
    <img src={event.cover} alt={event.title} />
  </div>
)

export default Event;