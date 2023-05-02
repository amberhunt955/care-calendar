import { useState, useEffect } from "react";

import * as contactsAPI from "../../utilities/contacts-api";

function ContactListPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(function () {
    async function fetchContacts() {
      const contacts = await contactsAPI.getAllContacts();
      setContacts(contacts);
    }
    fetchContacts();
  }, []);

  const handleSubmit = async (e, contact) => {
    console.log("HELLO FROM DELETE CONTACT HANDLE SUBMIT");
    console.log(contact);
    e.preventDefault();

    try {
      const deletedContact = await contactsAPI.deleteContact(contact);
      console.log("deletedContact");
      const contacts = await contactsAPI.getAllContacts();
      console.log(contacts);
      setContacts(contacts);
    } catch (error) {
      console.log("Delete Contact Failed");
      // setContacts({ ...contacts, error: "Delete Contact Failed - Try Again" });
    }
  };

  return (
    <div>
      <h1>My Contacts</h1>

      {contacts.map((contact) => {
        console.log(contact.events);
        return (
          <div key={contact._id}>
            <h2>
              <a href={`my-contact-list/${contact._id}`}>{contact.name}</a>
            </h2>
            <a href="/new">Add Event</a>
            &nbsp; | &nbsp;
            <a href={`/my-contact-list/${contact._id}/edit`}>Edit Contact</a>
            &nbsp; | &nbsp;
            <button
              type="submit"
              value="DELETE"
              onClick={(e) => handleSubmit(e, contact._id)}
            >
              Delete Contact
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ContactListPage;
