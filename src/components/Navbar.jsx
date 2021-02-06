import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';


const Navbar = () => (
  <div>
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6">
          RAVII
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

export default Navbar;