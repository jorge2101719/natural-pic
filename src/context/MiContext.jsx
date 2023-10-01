import { createContext, useState } from 'react'

// importación del archivo con la información a consumir
import imagenes from '../../public/photos.json'

// se crea el contexto (punto 1 del desafío)
export const MiContexto = createContext()

// Se crea un hook con useState que se asigna como valor
// del Provider creado (punto 3 del desafío)
const ImageProvider = ({children}) => {
  const [fotos, setFotos] = useState(imagenes.photos)

  return(
    <MiContexto.Provider value={{fotos, setFotos}}>
      {children}
    </MiContexto.Provider>
  )
}

export default ImageProvider;