import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as contactsAPI from "../../utilities/contacts-api";
import styles from "./EditContactForm.module.css";

function EditContactForm() {
  //* GETTING THE DATA OF THE CONTACT TO BE EDITED
  // Grab contactId from params
  const { contactId } = useParams();

  // UseEffect -> calls get list function -> pass id
  // -> data comes back and puts into state, form reads from state
  const [contact, setContact] = useState({});

  useEffect(function () {
    console.log(contactId);

    async function fetchContact() {
      const contactData = await contactsAPI.findContactById(contactId);
      setContact(contactData);
      console.log(contact);
      setFormData(contact)
    }

    fetchContact(contactId);
  }, []);

  console.log(contact);

  //* HANDLING THE NEW EDIT FORM DATA
    const [formData, setFormData] = useState({
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      address: contact.address,
      error: "",
    });

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       console.log(formData);
  //       // data to be send to the backend to create a new user
  //       const newData = {
  //         name: formData.name,
  //         phone: formData.phone,
  //         email: formData.email,
  //         address: formData.address,
  //       };
  //       // returns a token with the user info
  //       const updatedContact = await contactsAPI.updateContact(newData); // user service
  //       console.log(updatedContact);
  //     } catch (error) {
  //       setFormData({ ...formData, error: "Update Contact Failed - Try Again" });
  //     }
  //   };

    const handleChange = (evt) => {
      setFormData({...formData, [evt.target.name]: evt.target.value, error: ''})
    };

  return (
    <div>
      <form
        className={styles.EditContactForm}
        autoComplete="off"
        // onSubmit={handleSubmit}
      >
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            placeholder={contact.name}
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
            onChange={handleChange}
          />
        </label>

        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            placeholder={contact.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Address:{" "}
          <input
            type="text"
            name="address"
            placeholder={contact.address}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit Changes</button>
      </form>

      <p className="error-message">{contact.error}</p>
    </div>
  );
}

export default EditContactForm;
