import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from "react-router-dom"
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import zIndex from '@material-ui/core/styles/zIndex';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <>
     <video style={{position:"fixed",right:"0",bottom:"0",minWidth:"100%", minHeight:"100%"}} autoPlay muted loop >
            <source src="https://media.giphy.com/media/WZAkcfnc68G1W/giphy.mp4"/>
        </video>
    <div style={{position: "fixed",background: 'rgba(0, 0, 0, 0.5)', color: "#f1f1f1",top: '0', width: "100%", padding: '20px'}}>
        
    <Container style={{height: '200px'}} component="main"  maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          W A L L B U M
        </Typography>
         <Link to="/home">
          <Button
           type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Take a Look
          </Button>
          </Link>
            
          
        
      </div>
      
    </Container>
    </div>
    </>
  );
}