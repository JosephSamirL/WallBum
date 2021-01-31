import React,{useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { Button, Card, CardContent, CardMedia, IconButton } from '@material-ui/core';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import Navbar from './Navbar';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import { useStore } from '../state/state';
function Image() {
    const {id} = useParams();
    const{theme}= useStore()
    
  
    return (
       <>
       <Navbar/>
                <Card style={{maxWidth:"700px", margin:"auto", marginTop:"10px", }}>
                  <CardMedia
                  style={{height:0, paddingTop:"52.65%"}}
                    image= {`https://salty-brook-11628.herokuapp.com/files/${id}`}
                    title={id}
                  >
                  </CardMedia>
               <a style={{textDecoration:"none"}} href={`https://salty-brook-11628.herokuapp.com/files/${id}`}>  <Button style={{ backgroundColor: !theme?red[200]:grey[800], color:!theme? "black":"white" , width:"100%"}}> D o w n l o a d <GetAppRoundedIcon/></Button></a>
                </Card>
                
               
       </>
    )
}

export default Image
