import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Episodio from './Episodio'

const ListaEpisodios = ({ title, personajes }) => {

  const [episodios, setEpisodios] = useState([])

  const urlPersonajes = 'https://rickandmortyapi.com/api/character'



  /**
   * Get the data from the API
   * If the length of the data is not equal to 2, then set the episodios state to the episode property of
   * the data, otherwise filter the episodios.
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
    const episodiosFilter = episodiosPersonaje1.filter(episodio => episodiosPersonaje2.includes(episodio));
    setEpisodios(episodiosFilter);
  }


  useEffect(() => {
    if (personajes[0] !== 0) {

      getEpisodiosList();
    }
  }, [personajes])

  return (
    <Box component='section' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '30%' }}>
      <h3>{title}</h3>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
        {episodios
          ? episodios.map((episodio, i) => <Episodio key={i} episodio={episodio} />)
          : <p> NO HAY EPISODIOS</p>
        }
      </Box>
    </Box>
  )
}

export default ListaEpisodios