import { useEffect, useState } from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/Navbar";

import { API_URL } from "../config/api";

const ProductDetail = () => {
  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [size, setSize] =
    useState("M");

  const [product, setProduct] =
    useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct =
    async () => {
      try {
        const response =
          await fetch(
            `${API_URL}/api/products`
          );

        const data =
          await response.json();

        const found =
          data.find(
            (p) =>
              p.id === Number(id)
          );

        setProduct(found);
      } catch (error) {
        console.log(error);
      }
    };

  if (!product) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor:
            "#111",
          color: "white",
        }}
      >
        <Navbar />

        <h1
          style={{
            textAlign:
              "center",
            marginTop:
              "50px",
          }}
        >
          Cargando producto...
        </h1>
      </div>
    );
  }

  const handleBuy = () => {
    if (!product.active) {
      alert(
        "Este producto está agotado"
      );

      return;
    }

    const token =
      localStorage.getItem(
        "token"
      );

    if (!token) {
      const register =
        window.confirm(
          "Debes iniciar sesión para comprar."
        );

      if (register) {
        navigate("/register");
      } else {
        navigate("/login");
      }

      return;
    }

    const cartItem = {
      id: product.id,
      title:
        product.title,
      price:
        product.price,
      image:
        product.image_url,
      size,
    };

    const cart =
      JSON.parse(
        localStorage.getItem(
          "cart"
        )
      ) || [];

    cart.push(cartItem);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert(
      "Producto agregado al carrito 🛒"
    );

    navigate("/cart");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor:
          "#111",
        color: "white",
      }}
    >
      <Navbar />

      <div
        style={{
          padding: "40px",
          display: "flex",
          justifyContent:
            "center",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            backgroundColor:
              "#1e1e1e",
            padding: "30px",
            borderRadius:
              "15px",
          }}
        >
          <img
            src={
              product.image_url
            }
            alt={
              product.title
            }
            style={{
              width: "100%",
              height:
                "500px",
              objectFit:
                "cover",
              borderRadius:
                "15px",
              marginBottom:
                "20px",
            }}
          />

          <h1>
            {product.title}
          </h1>

          <h2
            style={{
              color:
                "#ff6600",
            }}
          >
            $
            {Number(
              product.price
            ).toLocaleString(
              "es-CL"
            )}
          </h2>

          <p
            style={{
              color:
                product.active
                  ? "#2ecc71"
                  : "#e74c3c",
              fontWeight:
                "bold",
              marginTop:
                "10px",
            }}
          >
            {product.active
              ? `Stock disponible: ${product.stock}`
              : "⚠ Producto agotado"}
          </p>

          <p>
            Producto disponible
            en UrbanStyle.
          </p>

          <div
            style={{
              marginTop:
                "20px",
              marginBottom:
                "20px",
            }}
          >
            <label>
              Selecciona tu talla
            </label>

            <br />

            <select
              value={size}
              onChange={(e) =>
                setSize(
                  e.target.value
                )
              }
              style={{
                padding:
                  "10px",
                borderRadius:
                  "10px",
                marginTop:
                  "10px",
                width:
                  "120px",
              }}
            >
              <option value="S">
                S
              </option>

              <option value="M">
                M
              </option>

              <option value="L">
                L
              </option>

              <option value="XL">
                XL
              </option>
            </select>
          </div>

          <button
            onClick={
              handleBuy
            }
            disabled={
              !product.active
            }
            style={{
              width: "100%",
              padding:
                "15px",
              border:
                "none",
              backgroundColor:
                product.active
                  ? "#ff6600"
                  : "#666",
              color:
                "white",
              borderRadius:
                "10px",
              cursor:
                product.active
                  ? "pointer"
                  : "not-allowed",
              fontSize:
                "16px",
              fontWeight:
                "bold",
            }}
          >
            {product.active
              ? "Agregar al carrito 🛒"
              : "Producto agotado"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;