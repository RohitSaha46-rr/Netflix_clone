import React from 'react'
import Navbar from './Navbar'
import Row_slider_movie from './Row_slider_movie'

const Trending = () => {
  return (
    <div className='trending'>
        <Navbar></Navbar>
        <Row_slider_movie title="Trending" link="https://api.themoviedb.org/3/trending/all/day?api_key=018baab65f32149b2da2b285f1622453"></Row_slider_movie>
        <Row_slider_movie link="https://api.themoviedb.org/3/trending/all/day?api_key=018baab65f32149b2da2b285f1622453&page=2"></Row_slider_movie>
        <Row_slider_movie  link="https://api.themoviedb.org/3/trending/all/day?api_key=018baab65f32149b2da2b285f1622453&page=3"></Row_slider_movie>
        <Row_slider_movie  link="https://api.themoviedb.org/3/trending/all/day?api_key=018baab65f32149b2da2b285f1622453&page=4"></Row_slider_movie>
        <Row_slider_movie  link="https://api.themoviedb.org/3/trending/all/day?api_key=018baab65f32149b2da2b285f1622453&page=5"></Row_slider_movie>
        <Row_slider_movie  link="https://api.themoviedb.org/3/trending/all/day?api_key=018baab65f32149b2da2b285f1622453&page=6"></Row_slider_movie>
        <Row_slider_movie  link="https://api.themoviedb.org/3/trending/all/day?api_key=018baab65f32149b2da2b285f1622453&page=7"></Row_slider_movie>
    </div>
  )
}

export default Trending