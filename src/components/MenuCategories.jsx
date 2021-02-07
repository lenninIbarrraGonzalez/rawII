import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch
} from '@material-ui/core';

import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';


const MenuCategories = () => {
  const [state, setState] = React.useState({
    clasica: true,
    jazz: true,
    pop: true,
    rock: true,
    salsa: true,
    ska: true,
    conciertos: true,
    documentales: true,
    peliculas: true,
    series: true,
    teatro: true,
    musica: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <List component='nav'>
        <ListItem button>
          <ListItemIcon>
            <EmojiSymbolsIcon />
          </ListItemIcon>
          <ListItemText>
            Filtros
          </ListItemText>
        </ListItem>
        <ListItem>
          <FormControl component="fieldset">
            <FormLabel component="legend">Categorias</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={state.clasica} onChange={handleChange} name="clasica" />}
                label="Clasica"
              />
              <FormControlLabel
                control={<Switch checked={state.jazz} onChange={handleChange} name="jazz" />}
                label="Jazz"
              />
              <FormControlLabel
                control={<Switch checked={state.pop} onChange={handleChange} name="pop" />}
                label="Pop"
              />
              <FormControlLabel
                control={<Switch checked={state.rock} onChange={handleChange} name="rock" />}
                label="Rock"
              />
              <FormControlLabel
                control={<Switch checked={state.salsa} onChange={handleChange} name="salsa" />}
                label="Salsa"
              />
              <FormControlLabel
                control={<Switch checked={state.ska} onChange={handleChange} name="ska" />}
                label="Ska"
              />

            </FormGroup>
          </FormControl>
        </ListItem>

        <ListItem>
          <FormControl component="fieldset">
            <FormLabel component="legend">Eventos</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={state.conciertos} onChange={handleChange} name="conciertos" />}
                label="Conciertos"
              />
              <FormControlLabel
                control={<Switch checked={state.documentales} onChange={handleChange} name="documentales" />}
                label="Documentales"
              />
              <FormControlLabel
                control={<Switch checked={state.peliculas} onChange={handleChange} name="peliculas" />}
                label="Peliculas"
              />

              <FormControlLabel
                control={<Switch checked={state.series} onChange={handleChange} name="series" />}
                label="Series"
              />
              <FormControlLabel
                control={<Switch checked={state.teatro} onChange={handleChange} name="teatro" />}
                label="Teatro"
              />
              <FormControlLabel
                control={<Switch checked={state.musica} onChange={handleChange} name="musica" />}
                label="Musica"
              />
            </FormGroup>
          </FormControl>
        </ListItem>
      </List>
    </div>
  )
}
export default MenuCategories;