import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// importación de Provider definido en MiContext
import ImageProvider from "./context/MiContext";

// importación de componentes y vistas que se utilizan
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

// uso del contexto creado para envolver toda la aplicación (punto 2 del desafío)
const App = () => {
  return (
    <div>
      <ImageProvider>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
         />
        </Routes>
      </ImageProvider>
    </div>
  );
};
export default App;
