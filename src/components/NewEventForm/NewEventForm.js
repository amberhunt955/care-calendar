import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createEvent } from "../../utilities/events-api";
import styles from "./NewEventForm.module.css";

function NewEventForm() {
  const navigate = useNavigate();
  const {contactId} = useParams()
  // Create state to manage the data from the form
  const [formData, setFormData] = useState({
    name: "",
    month: "",
    day: "",
    contact: contactId
  });

  // Create a handleSubmit to attach to the form onSubmit event
  // handleSubmit needs to call createEvent from events api
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);

      const eventData = {
        name: formData.name,
        month: formData.month,
        day: formData.day,
        contact: contactId
      };

      const event = await createEvent(eventData);
      console.log(event);
      
      navigate('/')
    } catch (error) {
      setFormData({ ...formData, error: "Create Event Failed - Try Again" });
    }
  };

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  return (
    <div className={styles.NewEventForm}>
      <h1>Add a New Event</h1>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    >

      <label>
        Event Name:{" "}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Month:{" "}
        <input
          type="text"
          name="month"
          value={formData.month}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Day:{" "}
        <input
          type="number"
          name="day"
          value={formData.day}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add Day</button>
    </form>
    </div>
  );
}

export default NewEventForm;
