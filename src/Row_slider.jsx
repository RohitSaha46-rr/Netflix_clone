import React, { useState,useEffect } from 'react'
import './row_slider.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const Row_slider = (props) => {
    const[list,up_list]=useState([]);
    const[trailerUrl,setTrailerUrl]=useState("");
    
    let base_url='https://image.tmdb.org/t/p/original';
    useEffect(()=>{
    async function data(){
        const req=await fetch(props.link);
        const jsdata=await req.json(req);
        up_list(jsdata.results);
       
    }
    data();
},[]);
const opts={
  height:"390",
  width:"100%",
  playerVars:{
  autoplay:1,
    // https://developers.google.com/youtube/player_parameters
     //origin: 'https://localhost:3002'
  }
};
const handleClick=(movie)=>{
  if(trailerUrl){
    setTrailerUrl("");
  }
  else{
    
    console.log(movie);
    movieTrailer(movie.name)
    .then((url)=>{
      console.log(movie.name);
      console.log(url);
    const urlParams=new URLSearchParams(new URL(url).search);
    console.log(urlParams);
    setTrailerUrl(urlParams.get('v'));
    })
   .catch((error)=>alert(`Sorry,trailer is not available for ${movie.name}`));
  }
}
  return (
      <div className='rows'>
      <h1>{props.title}</h1>
    <div className='row2'  >
    
    <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
     
      {
      list.map((movie)=>{
        return(
          <SwiperSlide> <img  src={`${base_url}${movie.poster_path}`} alt={movie.title} 
          onClick={()=>handleClick(movie)} /></SwiperSlide>
          
         
        )

      })
      
      }
      </Swiper>

</div>
{trailerUrl && <YouTube videoId={trailerUrl}  opts={opts} ></YouTube>}
</div>
  )
}

export default Row_slider