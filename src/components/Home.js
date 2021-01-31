import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ThemeProvider } from '@material-ui/core'
import "animate.css/animate.min.css";
import { createMuiTheme } from '@material-ui/core/styles'
import ScrollAnimation from 'react-animate-on-scroll'
import {Link} from 'react-router-dom'
import Navbar from "./Navbar"
import {useStore} from "../state/state"


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
const light = {

  palette: {

  type: 'light',

  },

}
const dark = {

  palette: {

  type: 'dark',

  },

}

export default function Home({img}) {
  const classes = useStyles();
  
  
const {theme} = useStore()


// Icons imported from `@material-ui/icons`

const appliedTheme = createMuiTheme(theme ? light : dark)

  return (
    <ThemeProvider theme={appliedTheme}>
    <React.Fragment>
      <CssBaseline />
     <Navbar />
      <main>
        {/* Hero unit */}
        <div  className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography style={{color: !theme ? 'white':'black'}} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              W A L L B U M
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              All the images on this website are taken from unsplash
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                
              </Grid>
            </div>
          </Container>
        </div>
        <Container  className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {img? img.map((item) => (
              
              <Grid item key={item.url} xs={12} sm={6} md={4}>
                <ScrollAnimation animateIn="flipInY" animateOut='flipOutY' >
                <Card className={classes.card}>
                  <Link to={"/home/"+item.name}><CardMedia
                    className={classes.cardMedia}
                    image= {`https://salty-brook-11628.herokuapp.com/files/${item.name}`}
                    title="Image title"
                  ></CardMedia></Link>
                 
                 
                </Card>
                </ScrollAnimation>
              </Grid>
              
            )): <CircularProgress style={{margin: 'auto'}} color="secondary" />}
          </Grid>
        </Container>
      </main>
     
    </React.Fragment>
    </ThemeProvider>
  );
}