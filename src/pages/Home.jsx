import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >

      {/* NAVBAR */}

      <Navbar />



      {/* CONTENIDO */}

      <div
        style={{
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          UrbanStyle Market
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#ccc",
          }}
        >
          Marketplace de ropa urbana moderna
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "15px 30px",
            backgroundColor: "#ff6600",
            border: "none",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Explorar productos
        </button>
      </div>



      {/* FOOTER */}

      <Footer />

    </div>
  );
};

export default Home;