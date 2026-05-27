import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Gallery from "../pages/Gallery";
import ProductDetail from "../pages/ProductDetail";
import CreateProduct from "../pages/CreateProduct";

import ProtectedRoute from "../components/ProtectedRoute";

const AppRouter = () => {
  return (
    <BrowserRouter basename="/Sistema-market">
      <Routes>

        {/* RUTAS PUBLICAS */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />



        {/* RUTAS PRIVADAS */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateProduct />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;