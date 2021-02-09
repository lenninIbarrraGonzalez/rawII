import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import Animations from '../components/Animations';
import '../styles/swiper.css';
import 'swiper/swiper-bundle.css';

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


const Waitingroom = (props) => {
  const { id } = props.match.params;
  const { data, loading } = useFetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
  const classes = useStyles();

  console.log('Este es el id', id)
  const pelicula = data?.data.movie;
  console.log('PELICULA', pelicula)

  if (loading) {
    return (
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs md={2} lg={3}>
            <Animations />
          </Grid>
          <Grid item xs md={2} lg={3}>
            <Animations />
          </Grid>
          <Grid item xs md={2} lg={3}>
            <Animations />
          </Grid>
          <Grid item xs md={2} lg={3}>
            <Animations />
          </Grid>
        </Grid>
      </Container>
    )
  }

  const slides = [];
  
  for(let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img 
          src='https://yts.mx/assets/images/movies/13_2010/large-cover.jpg'
          alt={`Slide ${i}`}
        />
        
      </SwiperSlide>
    )
  }


  return (
    <>
      <Swiper id='main'>
        {slides}
      </Swiper>
    </>
  )
}



export default Waitingroom;