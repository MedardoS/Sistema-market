import { useState } from "react";
import Navbar from "../components/Navbar";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(
        "https://sistema-market-backend.onrender.com/api/users/register",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data =
        await response.json();

      console.log(data);

      alert("Usuario registrado 😎");

    } catch (error) {

      console.log(error);

      alert("Error al registrar");

    }
  };

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
          onSubmit={handleRegister}
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
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            onChange={(e) =>
              setPassword(e.target.value)
            }
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