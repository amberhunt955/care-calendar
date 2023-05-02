import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as contactsAPI from "../../utilities/contacts-api"

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
      <a href="/my-contact-list">Back to All Contacts</a>
    </div>
  );
}

export default ContactProfilePage;
