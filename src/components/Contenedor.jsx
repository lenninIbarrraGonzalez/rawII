import React from 'react';
import {
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx';
import Navbar from './Navbar';
import Drawer from './Drawers';

const drawerWidth = 240;

const styles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },

}))

const Contenedor = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const classes = styles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Drawer />
      <div className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
      >
        <div className={classes.toolbar} />
        contenido
      </div>
    </div>
  )
};

export default Contenedor
