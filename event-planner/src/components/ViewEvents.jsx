import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import EventCard from "./EventCard";
import "./ViewEvents.css";

const ViewEvents = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        setEvents(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (event) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await deleteDoc(doc(db, "events", event.id));
        setEvents(events.filter(e => e.id !== event.id));
      } catch (error) {
        console.error("Error deleting event:", error);
      }
    }
  };

  const handleEdit = (event) => {
    navigate(`/update-event/${event.id}`);
  };

  return (
    <div className="view-events">
      {events.length > 0 ? (
        <div className="events-grid">
          {events.map(event => (
            <EventCard key={event.id} event={event} onDelete={handleDelete} onEdit={handleEdit} />
          ))}
        </div>
      ) : (
        <p className="no-events">No events available</p>
      )}
    </div>
  );
};

export default ViewEvents;
