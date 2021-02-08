import React, { useEffect, useState } from 'react'
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
    console.log('data await', data)
    const item = data;
    console.log('item', item)
    setData(item);
  }, []);

  return { data };
};



function Films() {
  const { data } = useFetch("https://yts.mx/api/v2/list_movies.json");
  const classes = useStyles();
  console.log('DATA', data?.data.movies)
  const peliculas = data?.data.movies
  return (
    <div>
      <h1>Pelicudas</h1>
      {peliculas?.map((pelicula) => (
        <h1>{pelicula.title_long}</h1>
      ))}
    </div>
  )
}

export default Films
