import { useState, useEffect } from "react";
import * as eventsAPI from "../../utilities/events-api";
import * as contactsAPI from "../../utilities/contacts-api";
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
        const contact = eventsAPI.populateContact(event._id);
        console.log(contact);

        return (
          <div key={event._id}>
            <li>
              {event.month} {event.day} {event.name}
            </li>
            <a href={`/${event.contact}`}>Contact</a>
          </div>
        );
      })}
    </div>
  );
}

export default TodaysEventsList;
