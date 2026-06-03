import { useState } from "react";
import Navbar from "../components/Navbar";
import { API_URL } from "../config/api";

const CreateProduct = () => {

  const [title, setTitle] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [image, setImage] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
        await fetch(
          `${API_URL}/api/products`,
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              title,
              price,
              image,
            }),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {

        alert(
          data.error ||
          "Error al crear producto"
        );

        return;
      }

      alert(
        "Producto publicado correctamente 😎"
      );

      setTitle("");
      setPrice("");
      setImage("");

    } catch (error) {

      console.log(error);

      alert(
        "Error al crear producto"
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
          paddingTop: "50px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "400px",
            backgroundColor: "#1e1e1e",
            padding: "30px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <h1>Crear Producto</h1>

          <input
            type="text"
            placeholder="Nombre del producto"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <input
            type="number"
            placeholder="Precio"
            value={price}
            onChange={(e) =>
              setPrice(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="URL de la imagen"
            value={image}
            onChange={(e) =>
              setImage(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <button
            type="submit"
            style={buttonStyle}
          >
            Publicar producto
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

export default CreateProduct;