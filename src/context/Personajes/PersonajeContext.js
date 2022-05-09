import { createContext, useState } from 'react';

const PersonajesContext = createContext({})

export function PersonajesContextProvider({ children }) {
    const [personajesSeleccionados, setPersonajesSeleccionados] = useState({
        personaje1: 1,
        personaje2: 2
    })
    return (
        <PersonajesContext.Provider value={{ personajesSeleccionados, setPersonajesSeleccionados }}>
            {children}
        </PersonajesContext.Provider>)

}


export default PersonajesContext