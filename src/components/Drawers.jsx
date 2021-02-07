import React from 'react'
import { makeStyles, Drawer, Divider } from "@material-ui/core";
import Listas from './Listas';

const drawerWidth = 240;

const styles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));


function Drawers() {
  const classes = styles();
  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor='left'
    >
      <div className={classes.toolbar} />
      <Divider />
      <Listas />
    </Drawer>
  )
}

export default Drawers
