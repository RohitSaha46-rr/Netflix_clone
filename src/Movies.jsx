import React from 'react'
import Navbar from './Navbar'
import Row_slider_movie from './Row_slider_movie';
const Movies = () => {
  return (
    <div className='movies'>
        <Navbar></Navbar>
        <Row_slider_movie title="Movies"
        link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=2"></Row_slider_movie>
        <Row_slider_movie link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=3"></Row_slider_movie>
        <Row_slider_movie link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=4"></Row_slider_movie>
        <Row_slider_movie link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=5"></Row_slider_movie>
        <Row_slider_movie link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=6"></Row_slider_movie>
        <Row_slider_movie link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=7"></Row_slider_movie>
    </div>
  )
}

export default Movies