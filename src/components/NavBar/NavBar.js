import { Link } from "react-router-dom";
import { logOut } from "../../utilities/users-service";
import styles from "./NavBar.module.css";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav className={styles.NavBar}>
      <section className={styles.left}>
      <Link to="/">Home</Link>

        <span>|</span>

        <p className={styles.welcome}>Welcome, {user.name}!</p>
      </section>

      <section className={styles.right}>
        <Link to="/my-contact-list">Contacts</Link>

        <span>|</span>

        <Link to="/add-new-contact">Add Contact</Link>

        <span>|</span>

        <Link to="" onClick={handleLogOut}>
          Logout
        </Link>
      </section>
    </nav>
  );
}

export default NavBar;
