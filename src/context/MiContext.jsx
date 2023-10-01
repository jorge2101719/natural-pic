import { createContext, useState } from 'react'; // importación de useContext y useState

import imagenes from '../../public/photos.json'; // importación del archivo con la información a consumir

export const MiContexto = createContext(); // Creación de un contexto (punto 1)

// Se crea un hook con useState que se asigna como valor
// del Provider creado (punto 3 del desafío)
const ImageProvider = ({children}) => {
  // Estado creado con useState que se pasará al valor de Provider (punto 3)
  const [fotos, setFotos] = useState(imagenes.photos);

  return(
    <MiContexto.Provider value={{fotos, setFotos}}>
      {children}
    </MiContexto.Provider>
  )
}

export default ImageProvider;