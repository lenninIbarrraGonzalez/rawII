import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Animations from './Animations';

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
  avatar: {
    backgroundColor: red[500],
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



function Films() {
  const { data, loading } = useFetch("https://yts.mx/api/v2/list_movies.json");
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (loading) {
    return (
      <Container className={classes.container}>
        <Grid container spacing={3} >
          <Grid item xs md={2} lg={3}>
            <Animations />
          </Grid>
          <Grid item xs md={2} lg={3}>
            <Animations />
          </Grid>
          <Grid item xs md={2} lg={3}>
            <Animations  />
          </Grid>
          <Grid item xs md={2} lg={3}>
            <Animations />
          </Grid>
        </Grid>
      </Container>
    )
  }
  const peliculas = data?.data.movies
  return (
    <Container className={classes.container}>
      <Grid container spacing={3} className={classes.grid}>
        {peliculas?.map((pelicula) => (
          <Grid item xs md={2} lg={3} key={pelicula.id}>

            <Card className={classes.root}>
              <CardHeader
                action={(
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                )}
                title={pelicula.title}
                subheader={`Año de estreno ${pelicula.year}`}
              />
              <CardMedia
                className={classes.media}
                image={pelicula.medium_cover_image}
                title="Paella dish"
              />
              <CardContent>
                <Typography paragraph>
                  {pelicula.genres}
                </Typography>

              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
                <Button size="small" color="primary">
                  ver evento
                </Button>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Synopsis:</Typography>
                  <Typography paragraph>
                    {pelicula.synopsis}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>

          </Grid>
        ))}
      </Grid>
    </Container>

  )
}

export default Films
