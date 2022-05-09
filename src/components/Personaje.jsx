import { Card, CardActionArea, CardContent, CardMedia, Tooltip, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import CircleIcon from '@mui/icons-material/Circle';
import AdbIcon from '@mui/icons-material/Adb';
import { useContext, useState } from 'react';
import PersonajesContext from '../context/Personajes/PersonajeContext';

const Personaje = props => {

    const { personajesSeleccionados, setPersonajesSeleccionados } = useContext(PersonajesContext);

    /* Destructuring the props object. */
    const { name, status, species, image, title, id } = props

    /**
     * If the status is 'Alive', return 'success', else if the status is 'Dead', return 'error', else return 'disabled'.
     * @returns the status of the character.
     */
    const isAlive = status => {
        return status === 'Alive' ? 'success' : (status === 'Dead' ? 'error' : 'disabled')
    }

    /**
     * If the title includes the number 2, then set the personaje2 property of the
     * personajesSeleccionados object to the id of the current character. Otherwise, set the personaje1
     * property of the personajesSeleccionados object to the id of the current character.
     */
    const handleSelect = () => {
        title.includes('2') ? setPersonajesSeleccionados((personaje) => ({ ...personaje, personaje2: id })) : setPersonajesSeleccionados((personaje) => ({ ...personaje, personaje1: id }))
    }

    const isSelected = () => {
        if (title.includes('1')) {
            if (personajesSeleccionados.personaje1 === id) {
                return 'darkgrey'
            }
        } else {
            if (personajesSeleccionados.personaje2 === id) {
                return 'darkgrey'
            }
        }
    }

    return (
        <Card sx={{ width: '30%', backgroundColor: isSelected() }} onClick={() => handleSelect()}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardMedia component="img" sx={{ width: '100%' }} image={image} alt={name} />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}  >
                    <Typography variant="overline" >
                        {name}
                    </Typography>
                    <Tooltip title={`Es un ${species} y esta ${status}`}>

                        {
                            species === 'Human'
                                ? <PersonIcon fontSize='small' color={isAlive(status)} />
                                : (species === 'Alien' ? <AdbIcon fontSize='small' color={isAlive(status)} /> : <CircleIcon fontSize='small' color={isAlive(status)} />)
                        }
                    </Tooltip>
                </CardContent>

            </CardActionArea>
        </Card>
    )
}

export default Personaje