import { Link } from "react-router-dom";
import { logOut } from "../../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
      &nbsp;
      <span>Welcome, {user.name}</span>{" "}
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/my-contact-list">My Contacts</Link>
      &nbsp; | &nbsp;
      <Link to="/add-new-contact">Add Contact</Link>
    </nav>
  );
}

export default NavBar;
