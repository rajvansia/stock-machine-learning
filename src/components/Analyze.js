import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



function Analyze(props) {
  
  return (
    <Card  className={useStyles.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Symbol {props.name}
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
            Company information about this stock information
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => this.addVote()}>
          Vote
        </Button>
      </CardActions>
    </Card>
  );
}

export default Analyze;