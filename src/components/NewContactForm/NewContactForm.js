import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContact } from "../../utilities/contacts-api";

import styles from "./NewContactForm.module.css";

function NewContactForm() {
  const navigate = useNavigate();
  // Create state to manage the data from the form
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    error: "",
  });

  // Create a handleSubmit to attach to the form onSubmit event
  // handleSubmit needs to call createContact from contacts api
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      // data to be send to the backend to create a new contact
      const contactData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
      };
      // returns a token with the contact info
      const contact = await createContact(contactData);
      console.log(contact);
      navigate('/my-contact-list')
    } catch (error) {
      setFormData({ ...formData, error: "Create Contact Failed - Try Again" });
    }
  };

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value, error: ''})
  };

  return (
    <div>
      <h1>Add a New Contact</h1>
      <form className={styles.NewContactForm} autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Phone: <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
        </label>

        <label>
          Email: <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <label>
          Address: <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>

        <button type="submit">Add Contact</button>
      </form>

      <p className="error-message">{formData.error}</p>
    </div>
  );
}

export default NewContactForm;
