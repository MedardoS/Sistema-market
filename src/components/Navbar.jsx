import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#000",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#ff6600" }}>UrbanStyle</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link style={{ color: "white" }} to="/">
          Home
        </Link>

        <Link style={{ color: "white" }} to="/gallery">
          Gallery
        </Link>

        <Link style={{ color: "white" }} to="/login">
          Login
        </Link>

        <Link style={{ color: "white" }} to="/register">
          Register
        </Link>

        <Link style={{ color: "white" }} to="/profile">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;