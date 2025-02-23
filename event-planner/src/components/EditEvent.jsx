import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { db } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import "./EditEvent.css";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const docRef = doc(db, "events", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const eventData = docSnap.data();
          setValue("name", eventData.eventName);
          setValue("date", eventData.date);
          setValue("time", eventData.time);
          setValue("venue", eventData.venue);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchEvent();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      await updateDoc(doc(db, "events", id), {
        eventName: data.name,
        date: data.date,
        time: data.time,
        venue: data.venue
      });
      alert("Event Updated");
      navigate("/events");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return loading ? <div>Loading...</div> : (
    <div className="parent-container">
      <div className="form-container">
        <h2>Edit Event</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Event Name:</label>
          <input type="text" {...register("name", { required: "Event name is required" })} />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <label>Date:</label>
          <input type="date" {...register("date", { required: "Date is required" })} />
          {errors.date && <p className="error">{errors.date.message}</p>}

          <label>Time:</label>
          <input type="time" {...register("time", { required: "Time is required" })} />
          {errors.time && <p className="error">{errors.time.message}</p>}

          <label>Venue:</label>
          <input type="text" {...register("venue", { required: "Venue is required" })} />
          {errors.venue && <p className="error">{errors.venue.message}</p>}

          <button type="submit">Update Event</button>
        </form>
      </div>
    </div>
  );
}

export default EditEvent;
