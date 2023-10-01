// Uso de useContext en componente Favorites (punto 4 del desafío)
import { useContext } from "react";
import { MiContexto } from "../context/MiContext";
import Card from 'react-bootstrap/Card';

const Favorites = () => {
  const {fotos, setFotos} = useContext(MiContexto);
  
  const borrar = (id) => {
    const fotoIndex = fotos.fotoIndex(e => e.id === id);
    // si el valor de liked es modificado a false, la función reconoce el cambio
    // para que el método filter no la incluya
    fotos[fotoIndex].liked = !fotos[fotoIndex].liked;
    setFotos([... fotos]);
  }

  // Dentro de return, se hace uso el método filter para seleccionar
  // las imágenes que tienen liked = true, luego se usa el método map
  // para crear un arreglo con aquellas que cumplen la condición.
  // Con Card.ImgOverlay, la imagen queda como fondo
  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {
          fotos.filter(e => e.liked).map((foto, i) =>
            <Card key={i} className='text-white' onClick={() => borrar()}>
              <Card.Img src={foto.src.tiny} alt={foto.alt} />
              <Card.ImgOverlay>
              </Card.ImgOverlay>
            </Card>
          )
        }
      </div>
    </div>
  );
};

export default Favorites;
