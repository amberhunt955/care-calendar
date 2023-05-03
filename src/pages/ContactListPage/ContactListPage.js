import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as contactsAPI from "../../utilities/contacts-api";

function ContactListPage() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  // useEffect to get all contacts in database
  useEffect(function () {
    async function fetchContacts() {
      const contacts = await contactsAPI.getAllContacts();
      setContacts(contacts);
    }
    fetchContacts();
  }, []);

  //* handle delete submit
  const handleDeleteSubmit = async (e, contact) => {
    console.log("HELLO FROM DELETE CONTACT HANDLE SUBMIT");
    console.log(contact);
    e.preventDefault();

    try {
      const deletedContact = await contactsAPI.deleteContact(contact);
      console.log(deletedContact);
      const contacts = await contactsAPI.getAllContacts();
      console.log(contacts);
      setContacts(contacts);
    } catch (error) {
      console.log("Delete Contact Failed");
    }
  };

  // //* handle edit submit
  // const handleEditSubmit = async (e, contactId, res) => {
  //   console.log("HELLO FROM EDIT CONTACT HANDLE SUBMIT");
  //   console.log(contactId);
  //   e.preventDefault();
  // };

  return (
    <div>
      <h1>My Contacts</h1>

      {contacts.length > 0 ? contacts.map((contact) => {
        // console.log(contact.events);
        return (
          <div key={contact._id}>
            <h2>
              <a href={`/${contact._id}`}>{contact.name}</a>
            </h2>

            <a href={`/${contact._id}/add-new-event`}>Add Event</a>
            &nbsp; | &nbsp;

            <button type="submit" value= "PUT" onClick={() => navigate(`/${contact._id}/update-contact`)}>
              Edit Contact
            </button>
            &nbsp; | &nbsp;

            <button
              type="submit"
              value="DELETE"
              onClick={(e) => handleDeleteSubmit(e, contact._id)}
            >
              Delete Contact
            </button>
          </div>
        );
      }) : <p>No contacts found.</p>}
    </div>
  );
}

export default ContactListPage;
