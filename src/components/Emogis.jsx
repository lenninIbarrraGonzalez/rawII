import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',

  },
  emogi: {
    cursor: 'pointer',

  }
}));

export default function Emogis() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThumbUpIcon color="secondary" fontSize='large' className={classes.emogi} />
      <ThumbDownIcon color="secondary" fontSize='large' className={classes.emogi} />
      <FavoriteIcon color="secondary" fontSize='large' className={classes.emogi} />
      <InsertEmoticonIcon color="secondary" fontSize='large' className={classes.emogi} />
    </div>
  );
}