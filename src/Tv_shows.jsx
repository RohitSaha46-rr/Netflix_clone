import React from 'react'
import Navbar from './Navbar'
import Row_slider from './Row_slider'

const Tv_shows = () => {
  return (
    <div className='tv_shows'>
        <Navbar></Navbar>
        <Row_slider
        title="Tv Shows"
        link="https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=2"></Row_slider>
        <Row_slider link="https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=6"></Row_slider>
        <Row_slider link="https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=7"></Row_slider>
        <Row_slider link="https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=8"></Row_slider>
        <Row_slider link="https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=9"></Row_slider>
        <Row_slider link="https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=10"></Row_slider>
        
    </div>
  )
}

export default Tv_shows