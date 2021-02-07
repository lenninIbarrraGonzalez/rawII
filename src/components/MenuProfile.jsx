import React, { useEffect, useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Avatar from '@material-ui/core/Avatar';
import imageLogin from '../assets/avatares/avatarLenin.png';
import api from '../../api'

const Listas = () => {
  const [character, setCharacter] = useState({})
  useEffect(() => {
    async function getCharacter() {
      setCharacter(await api.getCharacter(1))
      console.log(character)
    }
    getCharacter()
  }, [])

  return (
    <div>
      <List component='nav'>
        <ListItem>
          <ListItemIcon>
            <Avatar alt="Lennin" src={imageLogin} />
          </ListItemIcon>
          <ListItemText>
            Lennin Ibarra
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            Edad: 39
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EventAvailableIcon />
          </ListItemIcon>
          <ListItemText>
            Categorias
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText>
            Lista de amigos
          </ListItemText>
        </ListItem>
      </List>
    </div>
  )
}

export default Listas;