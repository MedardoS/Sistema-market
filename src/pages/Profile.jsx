import Navbar from "../components/Navbar";

const Profile = () => {

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
          padding: "40px",
        }}
      >
        <h1>Mi Perfil</h1>

        <p>
          Bienvenido a UrbanStyle Market
        </p>

        <p>
          Usuario autenticado
        </p>
      </div>
    </div>
  );
};

export default Profile;