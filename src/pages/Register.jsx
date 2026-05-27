import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "white",
      }}
    >
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
        <form
          style={{
            backgroundColor: "#1e1e1e",
            padding: "40px",
            borderRadius: "15px",
            width: "350px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h1>Registro</h1>

          <input
            type="text"
            placeholder="Nombre"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
          />

          <button style={buttonStyle}>
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "none",
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "#ff6600",
  border: "none",
  color: "white",
  borderRadius: "10px",
  cursor: "pointer",
};

export default Register;