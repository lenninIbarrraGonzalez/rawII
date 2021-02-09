import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Divider,
  TextField,

  Button,
  Paper,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(8),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(15),
    },
  },
  avatar: {
    margin: theme.spacing(2),
  },
  btnSubmit: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  errorField: {
    display: "flex",
    paddingLeft: theme.spacing(1),
    alignItems: "center",
  },
  errorIcon: {
    marginRight: theme.spacing(1),
  },
}));

const PageLogin = (props) => {
  const classes = useStyles();
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3}>
        <div className={classes.container}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Banco de proyectos
            <Divider />
          </Typography>

          <form className={classes.form}>
            <TextField
              name="usuario"
              id="usuario"
              variant="outlined"
              margin="normal"
              fullWidth
              autoComplete="email"
              autoFocus
              label="Correo electrónico"
            />
            
            <TextField
              name="password"
              id="password"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Contraseña"
              type="password"
              autoComplete="current-password"
            />
            <Link to="/">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Ingresar
              </Button>
            </Link>

            <Link to="/rememberpassword">¿olvidó su contrasaña?</Link>
          </form>
        </div>
      </Paper>
    </Container>
  );
};

// de esta forma se conecta al redux con reack forms hooks
// const HookformPageLogin = connect()(PageLogin);
export default PageLogin;
