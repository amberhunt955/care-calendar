import { useState, useEffect } from "react";
import EventListItem from "../EventListItem/EventListItem";
import * as eventsAPI from "../../utilities/events-api";
import styles from "./TodaysEventsList.module.css";

function TodaysEventsList() {
  const today = new Date().toLocaleDateString();

  const [events, setEvents] = useState([]);

  // useEffect to get all events in database
  useEffect(function () {
    async function fetchEvents() {
      const events = await eventsAPI.getAllEvents();
      setEvents(events);
    }
    fetchEvents();
  }, []);

  console.log(events);

  return (
    <div className={styles.TodaysEventsList}>
      <h1>{today}</h1>

      {events.map((event) => {
        return (
          <div key={event._id}>
            <h3>{event.name}</h3>
            <p>
              {event.month} {event.day}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TodaysEventsList;
