import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Episodios = ({ episodio }) => {

  const [episodioInfo, setEpisodio] = useState({})

  const { air_date, episode, name } = episodioInfo

  /**
   * When the component mounts, get the data from the API and set the state with the data.
   */
  const getEpisodio = async () => {
    const data = await axios(episodio).then(data => data.data);
    setEpisodio(data)
  }

  useEffect(() => {
    getEpisodio()
  }, [])


  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '1rem' }}>
      <Box>
        <Typography variant="body2">{name}  </Typography>
        <Typography variant="body2"> {episode} </Typography>
      </Box>
      <Typography variant="body2">{air_date}</Typography>
    </Box>


  )
}

export default Episodios