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
        <p>
          <Link to="/">Home</Link>
        </p>

        <span>|</span>

        <p className={styles.welcome}>Welcome, {user.name}!</p>
      </section>

      <section className={styles.right}>
        <p><Link to="/my-contact-list">Contacts</Link></p>

        <span>|</span>

        <p><Link to="/add-new-contact">Add Contact</Link></p>

        <span>|</span>

        <p><Link to="" onClick={handleLogOut}>
          Logout
        </Link></p>
      </section>
    </nav>
  );
}

export default NavBar;
