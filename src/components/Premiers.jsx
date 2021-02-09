import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, EffectCube } from 'swiper';
import '../styles/components/swiper.css';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Thumbs, EffectCube]);

const useStyles = makeStyles((theme) => ({
  tittle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cube: {
    cursor: 'pointer'
  }
  
}));

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const item = data;
    setData(item);
    setLoading(false);
  }, []);

  return { data, loading };

};



const Premiers = () => {
  
  const { data, loading } = useFetch(`https://yts.mx/api/v2/list_movies.json`);
  const classes = useStyles();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const thumbs = [];

  const peliculas = data?.data.movies
  peliculas?.map((pelicula) => (
    thumbs.push(
      <SwiperSlide key={pelicula.id} className={classes.cube}>
        <img
          src={pelicula?.medium_cover_image}
          alt={pelicula?.title}
          
        />
      
      </SwiperSlide>
      
    )
  ))

  return (
    <>
      <h1 className={classes.tittle}>Próximos estrenos</h1>
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