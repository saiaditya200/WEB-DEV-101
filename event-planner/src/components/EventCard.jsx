import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onDelete, onEdit }) => {
  return (
    <div className="event-card">
      <h3>{event.eventName}</h3>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Venue:</strong> {event.venue}</p>

      <div className="buttons">
        <button className="edit-btn" onClick={() => onEdit(event)}>Edit</button>
        <button className="delete-btn" onClick={() => onDelete(event)}>Delete</button>
      </div>
    </div>
  );
};

export default EventCard;
