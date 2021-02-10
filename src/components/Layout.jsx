import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Link from '@material-ui/core/Link';
import MenuProfile from './MenuProfile';
import MenuCategories from './MenuCategories';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  // Aqui cambia Left  right
  appBarShiftLeft: {
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  appBarShiftRight: {
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // cambia
  drawerHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerHeaderRight: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  // cambia
  contentLeft: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: -drawerWidth,
  },
  contentRight: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShiftLeft: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  contentShiftRight: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const [openLeft, setOpenLeft] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);

  const handleDrawerOpenLeft = () => {
    setOpenLeft(true);
  };

  const handleDrawerCloseLeft = () => {
    setOpenLeft(false);
  };

  const handleDrawerOpenRight = () => {
    setOpenRight(true);
  };

  const handleDrawerCloseRight = () => {
    setOpenRight(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShiftLeft]: openLeft,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpenLeft}
            edge='start'
            className={clsx(classes.menuButton, openLeft && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap className={classes.title} color='secondary'>
            <Link href="/" color='secondary'>
              RAVII
            </Link>

          </Typography>
          {/* <Button variant="contained" color="secondary" href='/login'>
            Login
          </Button> */}
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpenRight}
            edge='end'
            className={clsx(classes.menuButton, openRight && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={openLeft}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeaderLeft}>
          <IconButton onClick={handleDrawerCloseLeft}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <MenuProfile />
      </Drawer>

      <main
        className={clsx(classes.contentLeft, {
          [classes.contentShiftLeft]: openLeft,
        })}
      >
        <div className={classes.drawerHeaderLeft} />
        {children}
      </main>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={openRight}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeaderRight}>
          <IconButton onClick={handleDrawerCloseRight}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <MenuCategories />
      </Drawer>
    </div>
  );
}

export default Layout