import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as contactsAPI from "../../utilities/contacts-api";
import styles from "./EditContactForm.module.css";

function EditContactForm() {
  const navigate = useNavigate();
  //* GETTING THE DATA OF THE CONTACT TO BE EDITED
  // Grab contactId from params
  const { contactId } = useParams();

  // State management for fetching contact to be edited
  const [contact, setContact] = useState({});
  // State management for edit form data
  const [formData, setFormData] = useState({
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    address: contact.address,
    error: "",
  });

  // Get the contact we are trying to edit
  // Set formData to the contact pre-edit
  useEffect(function () {
    async function fetchContact() {
      const contactData = await contactsAPI.findContactById(contactId);
      setContact(contactData);
      setFormData(contact)
    }
    fetchContact(contactId);
  }, []);
  console.log(contact);
  console.log(formData);

  //* HANDLING THE NEW EDIT FORM DATA
    const handleSubmit = async (e, contact) => {
      e.preventDefault();
      try {
        console.log(contact);

        const updatedContact = await contactsAPI.updateContact(contactId, contact);
        // this is returning the original contact, not the updated contact?
        console.log(updatedContact);
        navigate('/my-contact-list');
      } catch (error) {
        setFormData({ ...formData, error: "Update Contact Failed - Try Again" });
      }
    };

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value, error: ''})
    };

  return (
    <div>
      <h1>Update {contact.name}'s Information</h1>
      <form
        className={styles.EditContactForm}
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e, formData)}
      >
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            placeholder={contact.name}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone:{" "}
          <input
            type="number"
            name="phone"
            placeholder={contact.phone}
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            placeholder={contact.email}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Address:{" "}
          <input
            type="text"
            name="address"
            placeholder={contact.address}
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit Changes</button>
      </form>
    </div>
  );
}

export default EditContactForm;
