import React from 'react'
import Navbar from './Navbar'
import Row_slider from './Row_slider'

const My_list = () => {
  return (
    <div className='my_list'>
        <Navbar></Navbar>
        <Row_slider  title="My List"
        link="https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=2"></Row_slider>
        <Row_slider link="https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=6"></Row_slider>
        <Row_slider link="https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=7"></Row_slider>
        <Row_slider link="https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=8"></Row_slider>
        <Row_slider link="https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=9"></Row_slider>
        <Row_slider link="https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=10"></Row_slider>
    </div>
  )
}

export default My_list