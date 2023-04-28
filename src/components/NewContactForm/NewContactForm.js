import styles from "./NewContactForm.module.css"

function NewContactForm() {
  return (
    <form className={styles.NewContactForm}>
      <label>
        Name: <input type="text" name="name" required />
      </label>

      <label>
        Phone: <input type="number" name="phone" />
      </label>

      <label>
        Email: <input type="email" name="email" />
      </label>

      <label>
        Address: <input type="text" name="address" />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default NewContactForm;
