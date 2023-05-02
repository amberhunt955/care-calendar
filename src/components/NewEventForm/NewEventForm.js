import { useState } from "react";
import { createEvent } from "../../utilities/events-api";
import styles from "./NewEventForm.module.css";

function NewEventForm() {
  // Create state to manage the data from the form
  const [formData, setFormData] = useState({
    name: "",
    month: "",
    day: "",
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
      };

      const event = await createEvent(eventData);
      console.log(event);
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
    <form
      className={styles.NewEventForm}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <label>
        Event:{" "}
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
  );
}

export default NewEventForm;
