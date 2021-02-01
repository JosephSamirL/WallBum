import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import SearchBar from "material-ui-search-bar";
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import { Button, ThemeProvider } from '@material-ui/core'
import "animate.css/animate.min.css";
import { createMuiTheme } from '@material-ui/core/styles'
import ScrollAnimation from 'react-animate-on-scroll'
import {Link} from 'react-router-dom'
import Navbar from "./Navbar"
import {useStore} from "../state/state.js"
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import {useSearch} from "../state/searchState"
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

export default function Home() {
  const classes = useStyles();
    const[key,setKey] = useState("")
  const {theme,page,setPage,img,anime} = useStore()
  const{search, setSearch, setImage} = useSearch();
 const handle = async(inp)=>{
   await setSearch(inp)
   
 }


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
              
              <Grid xs={8} item>
                <SearchBar
                        value={search} 
                        onChange={(newValue) => {setKey( newValue)}}  
                    />
                </Grid>
                <Grid  item>
                  
                <Button  onClick={()=>{setSearch(key)}} style={{height:"100%"}}><ImageSearchIcon/></Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container  className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
          {img? img?.map((item) => (
              
              <Grid item key={item.id + img.indexOf(item)} xs={12} sm={6} md={4}>
                {anime?<ScrollAnimation animateIn="flipInY" animateOut='flipOutY' >
                <Card className={classes.card}>
                  <Link onClick={()=>{setImage(img[img.indexOf(item)])}} to={"/home/"+item.id}><CardMedia
                    className={classes.cardMedia}
                    image= {item?.urls?.small}
                    title="Image title"
                  ></CardMedia></Link>
                 
                 
                </Card>
                </ScrollAnimation>:<Card className={classes.card}>
                  <Link onClick={()=>{setImage(img[img.indexOf(item)])}} to={"/home/"+item.id}><CardMedia
                    className={classes.cardMedia}
                    image= {item?.urls?.small}
                    title="Image title"
                  ></CardMedia></Link>
                 
                 
                </Card>}
              
              </Grid>
               
            ))   : <CircularProgress style={{margin: 'auto'}} color="secondary" />}
          
            <Button onClick={()=>{ setPage(page + 1)}} style={{width:"100%"}}>S H O W  M O R E {search} <ExpandMoreSharpIcon/></Button>
          </Grid>
          
        </Container>
       
      </main>
     
    </React.Fragment>
    </ThemeProvider>
  );
}