import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, EffectCube } from 'swiper';
import Animations from '../components/Animations';
import Premiers from '../components/Premiers';
import '../styles/containers/swiper.css';
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
  image:{
    width: 300,
  height: 500,
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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const pelicula = data?.data.movie;
  const image1 = pelicula?.background_image;
  const image2 = pelicula?.large_cover_image;


  const thumbs = [];
  for (let i = 0; i < 5; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <img
          src={`https://picsum.photos/id/${i}/163/100`}
          alt={`Thumbnail ${i}`}
        />
      </SwiperSlide>
    );
  }

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

 
  return (
    <>
      <Swiper
        id='main'
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
      >
        <SwiperSlide>
          <img 
            src={image2}
            alt={pelicula.title}
          />
        
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={image2}
            alt={pelicula.title}
          />
        
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={image2}
            alt={pelicula.title}
          />
        </SwiperSlide>
      </Swiper>
      
      <Premiers />
    </>
  )
}

export default Waitingroom;