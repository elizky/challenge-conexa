import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Personaje from './Personaje'
import { Box, Pagination, Stack } from '@mui/material'

const ListaPersonajes = ({ title }) => {

    const [personajes, setPersonajes] = useState([])
    const [pagination, setPagination] = useState(1)
    const [page, setPage] = useState(1)

    const url = 'https://rickandmortyapi.com/api/character'

    /**
     * "getPersonajes" is an async function that uses the axios library to make a request to the Rick
     * and Morty API, and then sets the state of the "personajes" array to the data returned from the
     * API depending on the page number.
     */
    const getPersonajes = async () => {
        const pageUrl = `${url}/?page=${page}`;
        const data = await axios(pageUrl).then(data => data.data);
        setPersonajes(data.results);
        setPagination(data.info.pages);
    }

    /**
     * When the user clicks on a page number, set the page number to the value of the page number that
     * was clicked on.
     */
    const handlePagination = (_, value) => {
        setPage(value);
    }

    /* A React hook that is used to perform side effects in function components. It is a function that
    takes a function as an argument and returns a clean-up function. */
    useEffect(() => {
        getPersonajes();
    }, [page])


    return (
        <Box component='section' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '50%' }}>
            <h3>{title}</h3>
            <Stack spacing={2}>
                <Pagination count={pagination} page={page} onChange={handlePagination} />
            </Stack>
            <Box component='div' sx={{display:'flex', flexWrap:'wrap', gap: '1rem'}}>
                {personajes.length > 0
                    ? personajes.map((item, i) => <Personaje title={title} key={item.id + i} {...item}></Personaje>)
                    : <p> NO HAY PERSONAJES</p>
                }
            </Box >
        </Box>
    )
}

export default ListaPersonajes