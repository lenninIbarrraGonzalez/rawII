import React, { useEffect, useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const item = data.results;
    setData(item);
  }, []);

  return { data };
};

function friends() {
  const { data } = useFetch("https://randomuser.me/api/?results=7");
  const classes = useStyles();
  return (
    <div>

      {data?.map((item) => (
        <div className={classes.root}>
          <Avatar alt="Remy Sharp" src={item.picture.medium} />
          <h3>{item.name.first}</h3>

        </div>
      ))}
    </div>
  )
}

export default friends
