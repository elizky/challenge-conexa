import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Episodios from './Episodios'

const ListaEpisodios = ({ title, personajes }) => {
  console.log('personajes --------------------', personajes)


  const [episodios, setEpisodios] = useState([])

  const urlPersonajes = 'https://rickandmortyapi.com/api/character'

  /**
   * Toma los datos de la API y dependiendo del array de la data ejecuta dos metodos.
   */
  const getEpisodiosList = async () => {
    const url = `${urlPersonajes}/${personajes}`;
    const data = await axios(url).then(data => data.data);
    data.length !== 2 ? setEpisodios(data.episode) : filterEpisodios(data);
  }

  /**
   * It takes an array of objects, and returns an array of objects.
   */
  const filterEpisodios = (personajes) => {
    const episodiosPersonaje1 = personajes[0].episode;
    const episodiosPersonaje2 = personajes[1].episode;
    const episodiosFilter = episodiosPersonaje1.filter(episodio => episodio == episodiosPersonaje2);
    console.log('episodiosFilter', episodiosFilter)
    setEpisodios(episodiosFilter);
  }


  useEffect(() => {
    getEpisodiosList();
  }, [personajes])

  return (
    <Box component='section' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '50%' }}>
      <h3>{title}</h3>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
        {episodios.length > 0
          ? episodios.map((episodio, i) => <Episodios key={i} episodio={episodio} />)
          : <p> NO HAY EPISODIOS</p>
        }
      </Box>
    </Box>
  )
}

export default ListaEpisodios