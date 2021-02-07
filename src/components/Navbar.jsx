import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  }

}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="fixed" color="primary">
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
      <div className={classes.offset} />
    </div>
  )
}

export default Navbar;