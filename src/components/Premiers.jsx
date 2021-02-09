import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, EffectCube } from 'swiper';
import '../styles/components/swiper.css';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Thumbs, EffectCube]);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
}));

const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const item = data;
    setData(item);
  }, []);

  return { data };

};



const Premiers = () => {
  
  const { data} = useFetch(`https://yts.mx/api/v2/list_movies.json`);
  const classes = useStyles();

  const thumbs = [];

  const peliculas = data?.data.movies
  peliculas?.map((pelicula) => (
    thumbs.push(
      <SwiperSlide key={pelicula.id}>
        <img
          src={pelicula?.medium_cover_image}
          alt={pelicula?.title}
          className={classes.image}
        />
      </SwiperSlide>
    )
  ))

  return (
    <>
      <h1>Estrenos</h1>
      <Swiper
        id="thumbs"
        effect='cube'
      >
        {thumbs}
      </Swiper>
    </>
  )
}

export default Premiers;