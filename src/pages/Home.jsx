import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import ListaEpisodios from '../components/ListaEpisodios'
import ListaPersonajes from '../components/ListaPersonajes'
import PersonajesContext from '../context/Personajes/PersonajeContext'
import Header from '../layouts/Header'

const Home = () => {

    const { personajesSeleccionados } = useContext(PersonajesContext);

    const personaje1 = [personajesSeleccionados.personaje1]
    const personaje2 = [personajesSeleccionados.personaje2]
    const personajes = [personaje1, personaje2]

    return (
        <div>
            <Header />
            <Box component='main' sx={{ display: 'flex', width: '90%' }} m={'auto'}>
                <ListaPersonajes title={'Personajes #1'} />
                <ListaPersonajes title={'Personajes #2'} />
            </Box>
            <Box component='main' sx={{ display: 'flex', width: '90%' }} m={'auto'}>
                {personaje1 !== [''] ? <ListaEpisodios title={'Episodios Personaje #1'} personajes={personaje1} /> : null}
                {personajes ? <ListaEpisodios title={'Episodios en comun'} personajes={personajes} /> : null}
                {personaje2 ? <ListaEpisodios title={'Episodio Personaje #2'} personajes={personaje2} /> : null}
            </Box>

        </div>
    )
}

export default Home