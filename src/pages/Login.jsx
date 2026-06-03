import { useState } from "react";
import Navbar from "../components/Navbar";
import { API_URL } from "../config/api";

const Login = () => {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response =
        await fetch(
          `${API_URL}/api/users/login`,
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {

        alert(
          data.error ||
          "Error login"
        );

        return;
      }

      localStorage.setItem(
        "token",
        data.token
      );

      alert(
        "Login exitoso 😎"
      );

      window.location.href =
        "/#/profile";

    } catch (error) {

      console.log(error);

      alert(
        "Error login"
      );

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
          paddingTop: "80px",
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            backgroundColor:
              "#1e1e1e",
            padding: "40px",
            borderRadius:
              "15px",
            width: "350px",
            display: "flex",
            flexDirection:
              "column",
            gap: "20px",
          }}
        >
          <h1>Login</h1>

          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button
            style={buttonStyle}
          >
            Ingresar
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

export default Login;