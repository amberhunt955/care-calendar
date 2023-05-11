import { useState, useEffect } from "react";
import * as eventsAPI from "../../utilities/events-api";
import styles from "./TodaysEventsList.module.css";

function TodaysEventsList() {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [events, setEvents] = useState([]);

  // useEffect to get all events in database
  useEffect(function () {
    async function fetchEvents() {
      // get all events in database
      const events = await eventsAPI.getAllEvents();
      // map over the events and populate each of them
      events.map(async (event) => {
        const populatedEvent = await eventsAPI.populateContact(event._id);
        // reassign the value of the event.contact to the new populated contact
        event.contact = populatedEvent.contact;
      })
      setEvents(events);
    }

    fetchEvents();
  }, []);

  return (
    <div className={styles.TodaysEventsList}>
      <h1>Today's Date is {today}</h1>

      <h2>Upcoming Events</h2>
      {events.map((event) => {
        console.log(event.contact.name);

        return (
          <div key={event._id}>
            <li>
              {event.month} {event.day} ({event.name})
            </li>
            <a href={`/${event.contact}`}> Contact {event.contact.name}</a>
          </div>
        )
      })}
    </div>
  );
}

export default TodaysEventsList;
