import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  CssBaseline,
  Paper,
  Typography,
  Divider,
  TextField,
  Button,
  Avatar,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(8),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(30),
    },
  },
  avatar: {
    margin: theme.spacing(2),
  },
  btnSubmit: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    width: '100%',
  },
}));


const RememberPass = () => {
  const classes = useStyles();
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Paper elevation={3}>
        <div className={classes.container}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5' component='h1'>
            RAVII
            <Divider />
          </Typography>
          <form className={classes.form}>
            <TextField
              name='email'
              id='email'
              label='Correo electrónico'
              variant='outlined'
              margin='normal'
              fullWidth
              autoComplete='email'
              autoFocus
            />
            <Link to='/'>
              <Button
                variant='contained'
                color='primary'
                fullWidth
                type='submit'
              >
                Recordar
              </Button>
            </Link>
            <Link to='/login'>Cancelar</Link>
          </form>
        </div>
      </Paper>
    </Container>
  );
};

export default RememberPass;
