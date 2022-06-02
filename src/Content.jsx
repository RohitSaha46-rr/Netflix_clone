import { faInfo, faPause, faPlay, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react'
import './content.css';
import allOfUsAreDead from './videos/All of us are dead.mp4';
import neymar from './videos/Neymar.mp4';
import thireen_reasons from './videos/13 REASONS WHY.mp4';
import juv from './videos/Juvenile Justice.mp4';
import peaky_blinders from './videos/Peaky Blinders.mp4';
import human from './videos/Human Resources.mp4';
import dasvi from './videos/Dasvi.mp4';
import money from './videos/Money Heist.mp4';

const Content = () => {
  const[check,updated_check]=useState(true);
  const[check1,updated_check1]=useState(true);
  const[speaker,updated_speaker]=useState(faVolumeXmark);
  const[text,updated_text]=useState("Pause");
  const[pause_icon,updated_pause]=useState(faPause);
  // const[i,up_i]=useState(0);
  const video_array=[
    {
      
      "video":allOfUsAreDead,
      "title":"All of us are dead"
    },
  {
    "video":neymar,
    "title":"Neymar:The Perfect Chaos"
  },
{
  "title":"13 Reasons Why S1"
},
{
  "title":"Juvenile Justice"
},
{
  "title":"Peaky Blinders S5"
},{
  "title":"Money Heist S5"
},{
  "title":"Dasvi"
},{
  "title":"Human Resources"
}];
  const videos=[allOfUsAreDead,neymar,thireen_reasons,juv,peaky_blinders,money,dasvi,human];



  
  //console.log(i);
  const eye_icon=useRef(null);
  const eye_icon2=useRef(null);
 const soundon=()=>{
  
  let xtype=eye_icon.current;
  console.log(xtype);
  xtype.muted=false;
  updated_check1(false);
  updated_speaker(faVolumeHigh);
 }
 const soundoff=()=>{
  
  let xtype=eye_icon.current;
  console.log(xtype);
  xtype.muted=true;
  updated_check1(true);
  updated_speaker(faVolumeXmark);
 }
 const pauseVid=()=>{
  let xtype=eye_icon.current;
  xtype.pause();
  updated_check(false);
  updated_text("Play");
  updated_pause(faPlay);

 }
 const playVid=()=>{
   let xtype=eye_icon.current;
   xtype.play();
   updated_check(true);
   updated_text("Pause");
   updated_pause(faPause);
 }
 let i=Math.floor(Math.random()*8);
 window.onload = function(){ 
  //now that the window has loaded we add our event listeners to the videos.
  //When video1 has ended, play video2 etc
let xtype=eye_icon.current;
let xtype1=eye_icon2.current;
xtype.setAttribute("src",videos[i]);
xtype1.innerHTML=video_array[i].title;
console.log(xtype1.innerHTML);
}



 

  

  return (
    <div className='content'>
        <video  autoPlay muted id='video1' className="myVideo" ref={eye_icon}>
        
              
        
        </video>
      
        
        <div className="main-content">
            <h2><span style={{color:"red",fontSize:"5rem"}}>N</span>SERIES</h2>
            
                    <h1 ref={eye_icon2}></h1>
           
          
            

            <button onClick={check ?pauseVid: playVid}><FontAwesomeIcon icon={pause_icon} className='pe-3'></FontAwesomeIcon>{text}</button>
            <button className='ms-5'><FontAwesomeIcon icon={faInfo} className='pe-3'></FontAwesomeIcon>More Info</button>
            <FontAwesomeIcon icon={speaker} style={{color:"whitesmoke"}} onClick={check1? soundon:soundoff} id="speaker"></FontAwesomeIcon>
          </div>
    
  

       
    </div>
  )
}

export default Content