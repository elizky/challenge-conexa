import { createContext, useState } from 'react';

/* It's creating a context object. */
const PersonajesContext = createContext({})

/**
 * It's a function that takes a children prop and returns a PersonajesContext.Provider component with
 * the value of the personajesSeleccionados state and the setPersonajesSeleccionados state setter.
 * @returns The provider is returning the children of the component that is wrapped in the provider.
 */
export function PersonajesContextProvider({ children }) {
    const [personajesSeleccionados, setPersonajesSeleccionados] = useState({
        personaje1: 0,
        personaje2: 0
    })
    return (
        <PersonajesContext.Provider value={{ personajesSeleccionados, setPersonajesSeleccionados }}>
            {children}
        </PersonajesContext.Provider>)

}


export default PersonajesContext