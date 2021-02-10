import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(3)
  },
}));

function App() {
  const classes = useStyles();
  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-3-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]}
        {' '}
        {interval}
        {" "}
      </span>
    );
  });
  return (
    <>
      <div className={classes.root}>
        <div>
          <h1>El evento iniciarar en:</h1>
          <Typography color='primary' variant='subtitle2'>
            {timerComponents.length ? timerComponents : <span>Ahora mismos, ingresa ya!</span>}
          </Typography>


        </div>

      </div>
      <div className={classes.root}>
        <Button variant="contained" disabled>
          Ingresar
        </Button>
      </div>
    </>
  );
}

export default App;
