import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, image, title, price }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: "15px",
        overflow: "hidden",
        width: "300px",
        color: "white",
        boxShadow: "0 0 15px rgba(0,0,0,.3)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          padding: "20px",
        }}
      >
        <h2
          style={{
            minHeight: "60px",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            marginTop: "10px",
            color: "#ff6600",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          ${Number(price).toLocaleString("es-CL")}
        </p>

        <p
          style={{
            color: "#ccc",
          }}
        >
          Stock disponible
        </p>

        <button
          onClick={() => navigate(`/product/${id}`)}
          style={{
            marginTop: "15px",
            width: "100%",
            padding: "12px",
            border: "none",
            backgroundColor: "#ff6600",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Ver producto
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
