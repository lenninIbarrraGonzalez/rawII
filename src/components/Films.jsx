import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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



function Films() {
  const { data } = useFetch("https://yts.mx/api/v2/list_movies.json");
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const peliculas = data?.data.movies
  return (
    <div>

      {peliculas?.map((pelicula) => (
        <>
          <Card className={classes.root}>
            <CardHeader
              avatar={(
                <Avatar aria-label="recipe" className={classes.avatar}>
                  L
                </Avatar>
              )}
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
              <Typography variant="body2" color="textSecondary" component="p">
                {pelicula.summary}
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
        </>
      ))}
    </div>

  )
}

export default Films
