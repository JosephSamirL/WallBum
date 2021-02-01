import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import { Button, Card,  CardMedia } from '@material-ui/core';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import Navbar from './Navbar';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import { useStore } from '../state/state';
import { useSearch } from '../state/searchState';
import "../animation/style.css";
import ScrollAnimation from 'react-animate-on-scroll'
function Image() {
    const {id} = useParams();
    const{theme, anime}= useStore()
    const{image} = useSearch()
    return (
       <>
       <Navbar/>
             
                <Card style={{maxWidth:"700px", margin:"auto", marginTop:"10px", }}>
                {anime?<ScrollAnimation animateIn="flipInY" animateOut='flipOutY' >                 
                 <CardMedia
                  style={{height:0, paddingTop:"52.65%"}}
                    image= {image?.urls?.regular}
                    title={id}
                  >
                  </CardMedia></ScrollAnimation>:<CardMedia
                  style={{height:0, paddingTop:"52.65%"}}
                    image= {image?.urls?.regular}
                    title={id}
                  >
                  </CardMedia>}

               <a target="._blank" style={{textDecoration:"none"}} href={image?.urls?.full}>  <Button style={{ backgroundColor: !theme?red[200]:grey[800], color:!theme? "black":"white" , width:"100%"}}> D o w n l o a d <GetAppRoundedIcon/></Button></a>
                </Card>
                
               
       </>
    )
}

export default Image
