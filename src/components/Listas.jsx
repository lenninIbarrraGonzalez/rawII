import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const Listas = () => (
  <div>
    <List component='nav'>
      <ListItem button>
        <ListItemIcon>
          <FaceIcon />
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

export default Listas;