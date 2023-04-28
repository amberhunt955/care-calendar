import EventListItem from "../EventListItem/EventListItem";

import styles from "./TodaysEventsList.module.css";

function TodaysEventsList() {
    const today = (new Date()).toLocaleDateString();

    return (
        <div className={styles.TodaysEventsList}>
            <h1>{today}</h1>

            <EventListItem />

            <EventListItem />
            
            <EventListItem />
        </div>
    )
}

export default TodaysEventsList;