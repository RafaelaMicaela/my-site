import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));



export default function Chips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  

  return (
    <div className={classes.root}>
      <Chip label="Clickable Link" component="a" href="#chip" clickable color="primary" />
      <Chip label="Clickable Link" component="a" href="#chip" clickable  color="primary"/>
      <Chip label="Clickable Link" component="a" href="#chip" clickable  color="primary"/>
      <Chip label="Clickable Link" component="a" href="#chip" clickable  color="secondary"/>
      <Chip label="Clickable Link" component="a" href="#chip" clickable  color="secondary"/>
      <Chip label="Clickable Link" component="a" href="#chip" clickable  color="secondary"/>
      
    </div>
  );
}