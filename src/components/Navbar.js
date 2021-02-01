import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import { Button, ThemeProvider } from '@material-ui/core'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import "animate.css/animate.min.css";
import { createMuiTheme } from '@material-ui/core/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link, useLocation} from 'react-router-dom'
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

export default function Navbar() {
  const classes = useStyles();
 const location = useLocation()
const {theme, setTheme,anime,setAnime} = useStore()




const appliedTheme = createMuiTheme(theme ? light : dark)

  return (
    <ThemeProvider theme={appliedTheme}>
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{backgroundColor:grey[theme? 0: 900],}} position="relative">
        <Toolbar>
        {location.pathname !== "/home"?<Link to="/home"><ArrowBackIosIcon style={{color:theme?"white":"pink", margin: 2}}/></Link>:""}
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
          W A L L B U M
          </Typography>
          <div style={{marginLeft:'auto'}}>
            
          <Button style={{marginRight:"5px", color:"white"}} onClick={()=>setAnime(!anime)} >{anime?"animeOff":"animeOn"}</Button>
          <a onClick={()=>setTheme(!theme)} style={{}}>{theme?<Brightness3Icon/>:<Brightness7Icon />}</a>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
    </ThemeProvider>
  );
}