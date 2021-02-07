import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <MenuIcon
            aria-label="Menu"
            className={classes.menuButton}
          // onClick={() => actionOpen()}
          />
          <Typography variant="h6" className={classes.title}>
            RAVII
          </Typography>
          <MenuIcon
            aria-label="Menu"
            className={classes.menuButton}
          // onClick={() => actionOpen()}
          />
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Navbar;