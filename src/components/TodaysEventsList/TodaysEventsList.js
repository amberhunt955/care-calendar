import { useState, useEffect } from "react";
import * as eventsAPI from "../../utilities/events-api";
import styles from "./TodaysEventsList.module.css";

function TodaysEventsList() {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const [events, setEvents] = useState([]);

  // useEffect to get all events in database
  useEffect(function () {
    async function fetchEvents() {
      const events = await eventsAPI.getAllEvents();
      setEvents(events);
    }
    fetchEvents();
  }, []);

  return (
    <div className={styles.TodaysEventsList}>
      <h1>Today's Date is {today}</h1>

      <h2>Upcoming Events</h2>
      {events.map((event) => {
        return (
            <li key={event._id}>{event.month} {event.day} - {event.contact} ({event.name})</li>
        );
      })}
    </div>
  );
}

export default TodaysEventsList;
