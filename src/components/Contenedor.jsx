import React from 'react';
import {
  makeStyles
} from '@material-ui/core';
import Navbar from './Navbar';
import Drawer from './Drawers';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

}))

const Contenedor = () => {

  const classes = styles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Drawer />
      <div className={classes.content}>
        <div className={classes.toolbar} />
        contenido
      </div>
    </div>
  )
};

export default Contenedor
