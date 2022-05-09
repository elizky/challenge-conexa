import { PersonajesContextProvider } from './context/Personajes/PersonajeContext';
import Home from './pages/Home';

function App() {
  return (
    <PersonajesContextProvider>
      <Home />
    </PersonajesContextProvider>
  );
}

export default App;
