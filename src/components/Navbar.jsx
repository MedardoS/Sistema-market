import { Link } from "react-router-dom";

const Navbar = () => {

  const token =
    localStorage.getItem("token");

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "cart"
    );

    alert(
      "Sesión cerrada correctamente"
    );

    window.location.href =
      "/#/login";
  };

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
      <h2
        style={{
          color: "#ff6600",
        }}
      >
        UrbanStyle
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link
          style={{ color: "white" }}
          to="/"
        >
          Home
        </Link>

        <Link
          style={{ color: "white" }}
          to="/gallery"
        >
          Gallery
        </Link>

        {token && (
          <Link
            style={{ color: "white" }}
            to="/cart"
          >
            🛒 Carrito
          </Link>
        )}

        {!token && (
          <>
            <Link
              style={{ color: "white" }}
              to="/login"
            >
              Login
            </Link>

            <Link
              style={{ color: "white" }}
              to="/register"
            >
              Register
            </Link>
          </>
        )}

        {token && (
          <>
            <Link
              style={{ color: "white" }}
              to="/profile"
            >
              Profile
            </Link>

            <Link
              style={{ color: "white" }}
              to="/orders"
            >
              Mis Compras
            </Link>

            <Link
              style={{ color: "white" }}
              to="/create"
            >
              Crear Producto
            </Link>

            <button
              onClick={handleLogout}
              style={{
                backgroundColor:
                  "#ff6600",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;