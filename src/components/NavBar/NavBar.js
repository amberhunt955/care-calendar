import * as React from "react";
import { Link } from "react-router-dom";

// utilities
import { logOut } from "../../utilities/users-service";

// styling
import styles from "./NavBar.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Menu as MenuIcon } from "@mui/icons-material";

function NavBar({ user, setUser }) {
  //* Material UI Drop Down Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //* Handle Log Out
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };

  return (
    <nav className={styles.NavBar}>
      <section className={styles.left}>
        <span>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            startIcon={<MenuIcon />}
          ></Button>

          <p className={styles.welcome}>Welcome, {user.name}!</p>
        </span>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link to="/">
            <MenuItem onClick={handleClose} sx={{ color: "#3451d5" }}>
              Home
            </MenuItem>
          </Link>
          <Link to="/my-contact-list">
            <MenuItem onClick={handleClose} sx={{ color: "#3451d5" }}>
              Contacts
            </MenuItem>
          </Link>
          <Link to="" onClick={handleLogOut}>
            <MenuItem onClick={handleClose} sx={{ color: "#3451d5" }}>
              Logout
            </MenuItem>
          </Link>
        </Menu>
      </section>

      <section className={styles.right}>
        <p>
          <Link to="/add-new-contact">Add Contact</Link>
        </p>
      </section>
    </nav>
  );
}

export default NavBar;
