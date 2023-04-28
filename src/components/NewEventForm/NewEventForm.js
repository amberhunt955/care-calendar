import styles from "./NewEventForm.module.css"

function NewEventForm() {
  return (
    <form className={styles.NewEventForm}>
      <label>
        Event: <input type="text" name="event" required />
      </label>

      <label>
        Month: <input type="number" name="month" required />
      </label>

      <label>
        Day: <input type="number" name="date" />
      </label>

      <button type="submit">Add Day</button>
    </form>
  );
}

export default NewEventForm;