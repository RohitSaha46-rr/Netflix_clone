import React, { useState,useEffect } from 'react'
import './row.css';
const Row = () => {
    const[list,up_list]=useState([]);
   
    
    let base_url='https://image.tmdb.org/t/p/original';
    useEffect(()=>{
    async function data(){
        const req=await fetch('https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213');
        const jsdata=await req.json(req);
        up_list(jsdata.results);
       
    }
    data();
},[]);
  return (
      <div className='roww'>
      <h1>Top Rated</h1>
    <div className='row1'  >
    
    <br></br>
    {
        list.map((movie)=>{
            return(
                <>
                
                <div className='card1'>
          <img  src={`${base_url}${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.original_name}</h2>
          </div>
         
          </>
            )
    })
    }

</div>
</div>
  )
}

export default Row