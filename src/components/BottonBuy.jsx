import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center'
    
  },
}));

export default function BottonBuy() {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<ShoppingCartIcon />}
      >
        Comprar entradas
      </Button>
    </div>
  );
}