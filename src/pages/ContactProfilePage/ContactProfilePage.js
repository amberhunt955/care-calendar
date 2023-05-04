import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as contactsAPI from "../../utilities/contacts-api";

function ContactProfilePage() {
  //* GETTING THE DATA OF THE CONTACT TO BE EDITED
  // Grab contactId from params
  const { contactId } = useParams();

  // UseEffect -> calls get list function -> pass id
  // -> data comes back and puts into state, form reads from state
  const [contact, setContact] = useState({});

  useEffect(function () {
    async function fetchContact() {
      const contactData = await contactsAPI.findContactById(contactId);
      setContact(contactData);
    }

    fetchContact(contactId);
  }, []);

  return (
    <div>
      <h1>{contact.name}</h1>
      
      <p>Phone: {contact.phone}</p>
      
      <p>Email: {contact.email}</p>
      
      <p>Address: {contact.address}</p>
      
      <div>
        <h3>Events for {contact.name}</h3>
        {contact.events ? (
          contact.events.map((event) => {
            <li key={event._id}>
              {event.name}, {event.month} {event.day}
            </li>;
          })
        ) : (
          <p>No events found...</p>
        )}
        <a href={`/${contact._id}/add-new-event`}>Add Event</a>
      </div>
      
      <a href="/my-contact-list">Back to All Contacts</a>
    </div>
  );
}

export default ContactProfilePage;
