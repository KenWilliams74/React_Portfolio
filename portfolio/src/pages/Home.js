import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3" component="h2">
          Ken Williams
        </Typography>
        <Typography variant="h4" className={classes.pos} color="textSecondary">
          Full-Stack Web Developer
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="http://kenwilliams74.github.io" target="_blank" alt="My Other Site" size="small">This page is still in progress. Click here to see my other page!</Button>
      </CardActions>
    </Card>
  );
}