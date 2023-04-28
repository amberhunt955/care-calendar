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
      <Link to="/">Main Page</Link>
      &nbsp; | &nbsp;
      <Link to="/new">Add Contact</Link>
    </nav>
  );
}

export default NavBar;
